import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/smart-contract-development')({
  head: () => ({
    meta: seo({
      title: 'Smart Contract Development & Deployment | RedDuck',
      description:
        'Expert smart contract engineering on EVM, Solana, and Rust-based chains. Secure, gas-optimized code tailored to your decentralized application architecture',
    }),
    links: [canonical('/services/smart-contract-development')],
  }),
});
