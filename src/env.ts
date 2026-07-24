import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

let cached: ReturnType<typeof build> | undefined;

function build() {
  return createEnv({
    server: {
      SMTP_FROM: z.string().min(1),
      SMTP_TO: z.string().min(1),
      RESEND_API_KEY: z.string().min(1),
      SENTRY_AUTH_TOKEN: z.string().optional(),
    },
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
  });
}

// Lazy, memoized accessor: validation runs at first call inside a request
// handler, NOT at module import — so the `/` prerender build never fails on
// SMTP/RESEND vars that are unset at build time.
export function getServerEnv() {
  cached ??= build();
  return cached;
}
