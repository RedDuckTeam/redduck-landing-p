import { createLazyFileRoute } from '@tanstack/react-router';

import { PredictionMarketDevelopmentPage } from '~/components/pages/prediction-market-development';

export const Route = createLazyFileRoute(
  '/services/prediction-market-development',
)({
  component: PredictionMarketDevelopmentPage,
});
