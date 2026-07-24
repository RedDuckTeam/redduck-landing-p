import type { ReactNode } from 'react';

interface HowWeWorkItem {
  title: string;
  description: ReactNode;
}

export const HOW_WE_WORK_DATA: HowWeWorkItem[] = [
  {
    title: 'Discovery & Architecture',
    description: (
      <span>
        We start by understanding your asset class, investor profile, compliance
        requirements, and jurisdiction. We define token standard, chain, and
        architecture before writing a single line of code.
      </span>
    ),
  },
  {
    title: 'Smart Contract Development',
    description: (
      <span>
        Build, test, internal review. 100% test coverage is the baseline, not
        the goal. We write contracts the way auditors want to read them.
      </span>
    ),
  },
  {
    title: 'Platform Development',
    description: (
      <span>
        Issuance flow, investor onboarding, admin tools, reporting
        infrastructure. The full product layer on top of the contracts.
      </span>
    ),
  },
  {
    title: 'Security Audit & Deployment',
    description: (
      <span>
        Third-party audit coordination, issue resolution, testnet validation,
        mainnet deployment.
      </span>
    ),
  },
  {
    title: 'Post-Launch Support',
    description: <span>Monitoring, upgrades, new feature development.</span>,
  },
];
