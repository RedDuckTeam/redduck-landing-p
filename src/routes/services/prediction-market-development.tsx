import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/prediction-market-development')(
  {
    head: () => ({
      meta: seo({
        title: 'Decentralized Prediction Market Development | RedDuck',
        description:
          'Launch scalable, censorship-resistant prediction market protocols. Custom conditional token infrastructure, oracle integration, and fluid liquidity pooling',
      }),
      links: [canonical('/services/prediction-market-development')],
    }),
  },
);
