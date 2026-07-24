import type { ReactNode } from 'react';

interface HowWeWorkItem {
  title: string;
  description: ReactNode;
}

export const HOW_WE_WORK_DATA: HowWeWorkItem[] = [
  {
    title: 'Initial assessment',
    description: (
      <span>
        Whitepaper or codebase review, threat model, top risks ranked by
        severity, economic attack scenarios, prioritized security roadmap across
        three gates: <br />
        <br /> before code is final / before testnet / before mainnet
      </span>
    ),
  },
  {
    title: 'Architecture review',
    description: (
      <span>
        Access control, privilege design, upgrade strategy, oracle assumptions,
        fund-flow invariants, before development begins
      </span>
    ),
  },
  {
    title: 'Development partnership',
    description: (
      <span>
        For codebases we build: security embedded in the process, not added at
        the end
      </span>
    ),
  },
  {
    title: 'Audit preparation & coordination',
    description: (
      <span>
        Codebase documentation, natspec, architecture diagrams, invariant specs{' '}
        <br />
        <br /> We&apos;ve worked with Hacken and Sherlock and know what they
        want to see
      </span>
    ),
  },
  {
    title: 'Post-launch advisory',
    description: (
      <span>
        Ongoing security review of protocol decisions, governance proposals, new
        integrations
      </span>
    ),
  },
];
