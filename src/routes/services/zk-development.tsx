import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/zk-development')({
  head: () => ({
    meta: seo({
      title: 'Zero-Knowledge (ZK) Development Services | RedDuck',
      description:
        'Advanced zero-knowledge cryptography development. Build privacy-preserving applications, layer-2 scaling solutions, and production-ready ZK-proof infrastructure',
    }),
    links: [canonical('/services/zk-development')],
  }),
});
