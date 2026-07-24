import * as Sentry from '@sentry/tanstackstart-react';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { Resend } from 'resend';

import { getServerEnv } from '~/env';
import {
  getInTouchSchema,
  type GetInTouchSchema,
} from '~/schemas/get-in-touch';
import { EEA_UK_SET } from '~/utils/eea';

// Fixed, user-safe message. Never leak raw provider/SMTP errors to the client.
const GENERIC_EMAIL_ERROR =
  'We could not send your message right now. Please try again later or reach out to us directly.';

interface EmailEnvVars {
  from: string;
  to: string;
  resendApiKey: string;
}

/** Escapes user input interpolated into the notification email HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateEmailEnv(): EmailEnvVars {
  // Throws on a missing var; caught in the handler and surfaced as the
  // generic error, never the raw env detail.
  const env = getServerEnv();

  return {
    from: env.SMTP_FROM,
    to: env.SMTP_TO,
    resendApiKey: env.RESEND_API_KEY,
  };
}

const NOT_PROVIDED = 'Not provided';

async function sendEmailNotification(data: GetInTouchSchema): Promise<void> {
  const { from, to, resendApiKey } = validateEmailEnv();
  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: `"Sender Mail" <${from}>`,
    to,
    subject: 'Project Request',
    html: `
      <p>Full Name: ${escapeHtml(data.fullName)}</p>
      <p>Email: ${escapeHtml(data.email)}</p>
      <p>Phone: ${data.yourPhone ? escapeHtml(data.yourPhone) : NOT_PROVIDED}</p>
      <p>Telegram: ${data.telegram ? escapeHtml(data.telegram) : NOT_PROVIDED}</p>
      <p>Idea: ${escapeHtml(data.idea)}</p>
      <p>How did you hear about us: ${data.hearAboutUs ? escapeHtml(data.hearAboutUs) : NOT_PROVIDED}</p>
      <p>Details: ${data.hearAboutUsDetails ? escapeHtml(data.hearAboutUsDetails) : NOT_PROVIDED}</p>
      <p>Schedule Call: ${data.scheduleCall ? 'Yes' : 'No'}</p>
    `,
  });

  if (error) {
    // Report server-side; never surface the raw provider error to the client.
    Sentry.captureException(error);
    console.error('Email sending error:', error);
    throw new Error(GENERIC_EMAIL_ERROR);
  }
}

export const sendToEmail = createServerFn({ method: 'POST' })
  // Pass-through: .parse() here would leak a ZodError as a 500; validation
  // happens in the handler.
  .validator((data: GetInTouchSchema) => data)
  .handler(async (ctx) => {
    try {
      // Validate here, not in .validator() — a throw there leaks a 500.
      const parsed = getInTouchSchema.safeParse(ctx.data);
      if (!parsed.success) {
        Sentry.captureException(parsed.error);
        throw new Error(GENERIC_EMAIL_ERROR);
      }

      await sendEmailNotification(parsed.data);

      return 1;
    } catch (error) {
      // Report server-side; never leak raw env/SMTP/provider details to the client.
      Sentry.captureException(error);
      console.error('Error in sendToEmail:', error);
      throw new Error(GENERIC_EMAIL_ERROR);
    }
  });

// '' / XX / T1 (missing geo, Tor) → treat as could-be-EU and gate.
const UNKNOWN_COUNTRY_CODES = new Set<string>(['', 'XX', 'T1']);

// MUST stay POST (non-static): a GET would be prerendered and freeze the
// country to the build machine's IP for every visitor. Fail-closed to eu:true.
export const getIsEU = createServerFn({ method: 'POST' }).handler(
  async (): Promise<{ eu: boolean }> => {
    try {
      const request = getWebRequest();
      const country = request?.headers.get('cf-ipcountry')?.toUpperCase() ?? '';

      if (UNKNOWN_COUNTRY_CODES.has(country)) {
        if (import.meta.env.PROD) {
          try {
            Sentry.captureMessage('getIsEU: missing/unknown cf-ipcountry', {
              level: 'warning',
              extra: { country },
            });
          } catch {
            // ignore
          }
        }
        return { eu: true };
      }

      return { eu: EEA_UK_SET.has(country) };
    } catch (error) {
      try {
        Sentry.captureException(error);
      } catch {
        // ignore
      }
      return { eu: true };
    }
  },
);
