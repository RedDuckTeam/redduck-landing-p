import { wrapVinxiConfigWithSentry } from '@sentry/tanstackstart-react';
import { defineConfig } from '@tanstack/react-start/config';
import { generateSitemap } from 'tanstack-router-sitemap';
import { cloudflare } from 'unenv';
import tsConfigPaths from 'vite-tsconfig-paths';

import { sitemap } from './src/utils/sitemap';

const config = defineConfig({
  server: {
    prerender: {
      routes: Object.keys(sitemap.routes),
      crawlLinks: true,
      failOnError: true,
    },
    preset: 'cloudflare-module',
    unenv: cloudflare,
  },
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      generateSitemap(sitemap),
    ],
    ssr: {
      noExternal: ['gsap'],
    },
    build: {
      target: 'es2020',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ['gsap', 'gsap/ScrollTrigger'],
          },
        },
      },
    },
  },
});

export default wrapVinxiConfigWithSentry(config, {
  org: 'redduck-pb',
  project: 'redduck-landing-t3',
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,
});
