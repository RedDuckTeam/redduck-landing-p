/// <reference types="vinxi/types/server" />
import * as Sentry from '@sentry/tanstackstart-react';
import { getRouterManifest } from '@tanstack/react-start/router-manifest';
import {
  createStartHandler,
  defaultStreamHandler,
  defineHandlerCallback,
} from '@tanstack/react-start/server';

import { createRouter } from './router';

try {
  Sentry.init({
    dsn: 'https://6be8c4db1ace856c21a33943700dd1d6@o4507051622072320.ingest.us.sentry.io/4509485160857600',

    sendDefaultPii: true,
  });
} catch {
  // Swallow: observability must never break SSR rendering.
}

// Served when the SSR stream throws. No hydration markers — can't itself
// re-introduce a blank screen.
const STATIC_ERROR_SHELL_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Something went wrong</title>
    <style>
      html,body{margin:0;height:100%;background:#0f0f0f;color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;}
      .wrap{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px;box-sizing:border-box;}
      h1{font-size:24px;font-weight:600;margin:0 0 12px;}
      p{font-size:16px;line-height:1.5;margin:0 0 24px;color:#bdbdbd;max-width:420px;}
      a{display:inline-block;padding:12px 24px;border:1px solid #f5f5f5;border-radius:4px;color:#f5f5f5;text-decoration:none;font-size:16px;margin:0 6px 12px;}
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>Something went wrong</h1>
      <p>We hit an unexpected error while loading this page. Please refresh to try again.</p>
      <div>
        <!-- Empty href resolves to the current URL — a real retry of the
             failing route, with no JS in the shell. -->
        <a href="">Try again</a>
        <a href="/">Go to homepage</a>
      </div>
    </div>
  </body>
</html>`;

const safeStreamHandler = defineHandlerCallback(async (ctx) => {
  try {
    return await defaultStreamHandler(ctx);
  } catch (e) {
    Sentry.captureException(e);
    return new Response(STATIC_ERROR_SHELL_HTML, {
      status: 500,
      headers: { 'content-type': 'text/html' },
    });
  }
});

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(Sentry.wrapStreamHandlerWithSentry(safeStreamHandler));
