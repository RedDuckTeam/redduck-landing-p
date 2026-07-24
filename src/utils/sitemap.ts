import { type Sitemap } from 'tanstack-router-sitemap';

import { SITE_URL } from './seo';

import { type FileRouteTypes } from '../routeTree.gen';

export type TRoutes = FileRouteTypes['fullPaths'];

export const sitemap: Sitemap<TRoutes> = {
  siteUrl: SITE_URL,
  defaultPriority: 0.5,
  routes: {
    '/': {
      priority: 1,
      changeFrequency: 'weekly',
    },
    '/privacy-policy': {
      priority: 0.5,
      changeFrequency: 'yearly',
    },
    '/services/rwa': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/dao-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/defi-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/defi-security-audit': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/prediction-market-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/smart-contract-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/wallet-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/launchpad': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/zk-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    '/services/gamefi-development': {
      priority: 0.8,
      changeFrequency: 'monthly',
    },
  },
};
