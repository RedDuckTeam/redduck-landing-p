import type { ReactNode } from 'react';

interface HowWeWorkItem {
  title: string;
  description: ReactNode;
}

export const HOW_WE_WORK_DATA: HowWeWorkItem[] = [
  {
    title: 'Architecture & Design',
    description: (
      <span>
        Contract architecture, access control model, upgrade strategy, key
        invariants, before code is written.
      </span>
    ),
  },
  {
    title: 'Development',
    description: (
      <span>
        Modular, documented, test-driven - tests written alongside contracts,
        not after.
      </span>
    ),
  },
  {
    title: 'Internal Review',
    description: (
      <span>
        Static analysis, invariant testing, edge case coverage before anything
        leaves our hands.
      </span>
    ),
  },
  {
    title: 'Audit Coordination',
    description: (
      <span>
        We work with Hacken and Sherlock, and we prepare codebases that auditors
        want to read.
      </span>
    ),
  },
  {
    title: 'Deployment & Support',
    description: (
      <span>
        Testnet validation, mainnet deployment, ongoing upgrades and new
        modules.
      </span>
    ),
  },
];
