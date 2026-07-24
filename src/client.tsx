import * as Sentry from '@sentry/tanstackstart-react';
import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';

import { createRouter } from './router';

import { reloadOnce } from '~/utils';

const router = createRouter();

function stripQuery(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.origin + parsed.pathname;
  } catch {
    return url.split('?')[0];
  }
}

const PII_BREADCRUMB_CATEGORIES = new Set([
  'navigation',
  'fetch',
  'xhr',
  'console',
]);
const PII_URL_FIELDS = ['url', 'from', 'to'] as const;

function scrubBreadcrumbs(breadcrumbs: Sentry.Breadcrumb[] | undefined): void {
  if (!Array.isArray(breadcrumbs)) return;
  for (const crumb of breadcrumbs) {
    const data = crumb.data;
    if (
      !data ||
      !crumb.category ||
      !PII_BREADCRUMB_CATEGORIES.has(crumb.category)
    ) {
      continue;
    }
    for (const field of PII_URL_FIELDS) {
      if (typeof data[field] === 'string') {
        data[field] = stripQuery(data[field]) ?? data[field];
      }
    }
  }
}

try {
  Sentry.init({
    dsn: 'https://6be8c4db1ace856c21a33943700dd1d6@o4507051622072320.ingest.us.sentry.io/4509485160857600',

    sendDefaultPii: false,

    // Drop PII: no user block, no query strings in request URL or breadcrumbs.
    beforeSend(event) {
      try {
        delete event.user;

        if (event.request?.url) {
          event.request.url =
            stripQuery(event.request.url) ?? event.request.url;
        }

        scrubBreadcrumbs(event.breadcrumbs);
      } catch {
        // ignore — never suppress the event on scrub failure
      }

      return event;
    },
  });
} catch {
  // Swallow: observability must never break the app boot.
}

// Stale deploy: chunk 404s fire vite:preloadError. preventDefault() (Vite
// rethrows otherwise), then reload once to pick up the new chunk URLs.
if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    reloadOnce('vite-preload');
  });

  // Bare import() rejections: same stale-chunk symptom, same single reload.
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const message =
      reason instanceof Error ? reason.message : String(reason ?? '');

    if (
      /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(
        message,
      )
    ) {
      event.preventDefault();
      reloadOnce('dynamic-import');
      return;
    }

    // Sentry only, no toast — third-party rejections (Calendly, GTM) are noise.
    Sentry.captureException(reason);
  });

  // Global error net — report only, no toast.
  window.addEventListener('error', (event) => {
    Sentry.captureException(event.error ?? event.message);
  });
}

function reportReactError(
  kind: 'caught' | 'uncaught' | 'recoverable',
  error: unknown,
  componentStack?: string | null,
) {
  console.error(error);

  try {
    Sentry.captureException(error, {
      tags: { reactError: kind },
      extra: { componentStack },
    });
  } catch {
    // Reporting must never break the app.
  }
}

hydrateRoot(document, <StartClient router={router} />, {
  onCaughtError: (error, errorInfo) =>
    reportReactError('caught', error, errorInfo.componentStack),
  onUncaughtError: (error, errorInfo) =>
    reportReactError('uncaught', error, errorInfo.componentStack),
  onRecoverableError: (error, errorInfo) =>
    reportReactError('recoverable', error, errorInfo.componentStack),
});
