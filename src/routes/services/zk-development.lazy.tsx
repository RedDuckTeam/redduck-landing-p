import { createLazyFileRoute } from '@tanstack/react-router';

import { ZkPage } from '~/components/pages/zk';

export const Route = createLazyFileRoute('/services/zk-development')({
  component: ZkPage,
});
