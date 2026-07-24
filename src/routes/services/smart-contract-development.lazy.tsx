import { createLazyFileRoute } from '@tanstack/react-router';

import { SmartContractDevelopmentPage } from '~/components/pages/smart-contract-development';

export const Route = createLazyFileRoute(
  '/services/smart-contract-development',
)({
  component: SmartContractDevelopmentPage,
});
