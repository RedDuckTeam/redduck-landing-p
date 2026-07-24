import { createLazyFileRoute } from '@tanstack/react-router';

import { WalletDevelopmentPage } from '~/components/pages/wallet-development';

export const Route = createLazyFileRoute('/services/wallet-development')({
  component: WalletDevelopmentPage,
});
