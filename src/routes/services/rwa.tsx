import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/rwa')({
  head: () => ({
    meta: seo({
      title: 'Real World Asset (RWA) Tokenization | RedDuck',
      description:
        'Bring real-world assets onto the blockchain. We provide compliant RWA tokenization development for real estate, commodities, and financial instruments',
    }),
    links: [canonical('/services/rwa')],
  }),
});
