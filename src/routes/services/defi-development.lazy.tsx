import { createLazyFileRoute } from '@tanstack/react-router';

import { DefiDevelopmentPage } from '~/components/pages/defi-development';

export const Route = createLazyFileRoute('/services/defi-development')({
  component: DefiDevelopmentPage,
});
