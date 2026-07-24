import { createLazyFileRoute } from '@tanstack/react-router';

import { DefiSecurityAuditPage } from '~/components/pages/defi-security-audit';

export const Route = createLazyFileRoute('/services/defi-security-audit')({
  component: DefiSecurityAuditPage,
});
