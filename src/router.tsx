import { createRouter as createTanStackRouter } from '@tanstack/react-router';

import { DefaultCatchBoundary } from './components/common/default-catch-boundary';
import { NotFound } from './components/common/not-found';
import { routeTree } from './routeTree.gen';

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
  });
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
