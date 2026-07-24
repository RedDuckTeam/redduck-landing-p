import { createLazyFileRoute } from '@tanstack/react-router';

import { DaoDevelopmentPage } from '~/components/pages/dao-development';

export const Route = createLazyFileRoute('/services/dao-development')({
  component: DaoDevelopmentPage,
});
