import { createFileRoute } from '@tanstack/react-router';

import { canonical, seo } from '~/utils';

export const Route = createFileRoute('/services/launchpad')({
  head: () => ({
    meta: seo({
      title: 'Launchpad & Token Launch Infrastructure | RedDuck',
      description:
        'Engineering secure, high-load token launch infrastructure. From presale contracts to TGE, custom vesting schedules, and distribution mechanics that handle peak volume',
    }),
    links: [canonical('/services/launchpad')],
  }),
});
