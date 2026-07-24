import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/wallet-development')({
  head: () => ({
    meta: seo({
      title: 'Web3 & Crypto Wallet Development | RedDuck',
      description:
        'Custom Web3 wallet development solutions. Engineering secure, non-custodial wallets, browser extensions, and mobile crypto wallets with seamless UI/UX',
    }),
    links: [canonical('/services/wallet-development')],
  }),
});
