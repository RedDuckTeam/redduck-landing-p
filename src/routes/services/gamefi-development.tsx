import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/gamefi-development')({
  head: () => ({
    meta: seo({
      title: 'GameFi & GambleFi Development Services | RedDuck',
      description:
        'On-chain game and betting protocol development. We build P2E infrastructure, NFT game assets, in-game economies, and GambleFi protocols with provably fair VRF randomness.',
    }),
    links: [canonical('/services/gamefi-development')],
  }),
});
