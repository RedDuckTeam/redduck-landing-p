import { createLazyFileRoute } from '@tanstack/react-router';

import { LaunchpadPage } from '~/components/pages/launchpad';

export const Route = createLazyFileRoute('/services/launchpad')({
  component: LaunchpadPage,
});
