import { createLazyFileRoute } from '@tanstack/react-router';

import { GameFiDevelopmentPage } from '~/components/pages/gamefi-development';

export const Route = createLazyFileRoute('/services/gamefi-development')({
  component: GameFiDevelopmentPage,
});
