import { createFileRoute } from '@tanstack/react-router';

import { canonical } from '~/utils';

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    links: [canonical('/privacy-policy')],
  }),
});
