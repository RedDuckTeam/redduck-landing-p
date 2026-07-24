import validator from 'validator';
import { z } from 'zod';

// Treats undefined / '' / whitespace-only as "not provided".
const isEmpty = (v: string | undefined): boolean => !v || v.trim() === '';

export const AT_LEAST_ONE_CONTACT_MESSAGE =
  'Please provide at least one contact: email, phone, or Telegram.';

export const getInTouchSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, 'Full Name must be at least 1 characters long'),
    email: z.union([z.literal(''), z.string().email()]),
    yourPhone: z
      .string()
      .optional()
      // Trim-aware: whitespace-only is "not provided", not an invalid number,
      // so it produces ONLY the cross-field error (no double error). (Amend. 3)
      .refine(
        (v) => {
          const t = v?.trim();
          return t ? validator.isMobilePhone(t) : true;
        },
        { message: 'Invalid phone number' },
      ),
    telegram: z
      .string()
      .optional()
      .refine(
        (data) =>
          !data ||
          data.trim() === '' ||
          data.startsWith('@') ||
          data.startsWith('https://t.me/') ||
          data.startsWith('https://telegram.me/'),
        {
          message: 'Telegram Username must start with @ or be a link',
        },
      ),
    idea: z.string().trim(),
    hearAboutUs: z.string().min(1, 'Please select how you heard about us'),
    hearAboutUsDetails: z.string().optional(),
    scheduleCall: z.boolean().optional(),
  })
  .superRefine((val, ctx) => {
    const noContact =
      isEmpty(val.email) && isEmpty(val.yourPhone) && isEmpty(val.telegram);
    if (noContact) {
      // Attach to ALL THREE paths so each field's FormMessage shows the rule and
      // — with the deps wiring in Step 2c — all three clear together when any one
      // contact is filled. (Amend. 1 / Critic #1)
      for (const path of ['email', 'yourPhone', 'telegram'] as const) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: AT_LEAST_ONE_CONTACT_MESSAGE,
          path: [path],
        });
      }
    }
  });

export type GetInTouchSchema = z.infer<typeof getInTouchSchema> & {
  calendlyLink?: string;
};
