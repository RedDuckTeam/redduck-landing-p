import { createLazyFileRoute } from '@tanstack/react-router';

import { RwaPage } from '~/components/pages/rwa';

export const Route = createLazyFileRoute('/services/rwa')({
  component: RwaPage,
});
