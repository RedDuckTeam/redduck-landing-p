import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/defi-development')({
  head: () => ({
    meta: seo({
      title: 'DeFi Development Services | RedDuck',
      description:
        'Build secure, scalable decentralized finance applications. From AMMs and yield aggregators to custom liquidity protocols, we engineer next-gen DeFi solutions',
    }),
    links: [canonical('/services/defi-development')],
  }),
});
