import { createFileRoute } from '@tanstack/react-router';

import { canonical } from '~/utils';

export const Route = createFileRoute('/')({
  head: () => ({
    links: [canonical('/')],
  }),
});
