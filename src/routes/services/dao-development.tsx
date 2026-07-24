import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/dao-development')({
  head: () => ({
    meta: seo({
      title: 'DAO Development & Governance Frameworks | RedDuck',
      description:
        'Design and deploy custom Decentralized Autonomous Organizations. Tailored on-chain voting mechanics, governance token setups, and secure treasury management',
    }),
    links: [canonical('/services/dao-development')],
  }),
});
