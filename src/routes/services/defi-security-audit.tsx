import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/defi-security-audit')({
  head: () => ({
    meta: seo({
      title: 'DeFi Security & Smart Contract Audit Readiness | RedDuck',
      description:
        'Prepare your protocol for top-tier security audits. Comprehensive code reviews, threat modeling, and vulnerability mitigation to safeguard user funds',
    }),
    links: [canonical('/services/defi-security-audit')],
  }),
});
