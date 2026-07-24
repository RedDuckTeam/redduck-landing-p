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
        We define protocol mechanics, tokenomics, security requirements, and
        chain selection before writing a line of code. If your model has a
        structural flaw, we&apos;ll catch it here - not after deployment.
      </span>
    ),
  },
  {
    title: 'Smart Contract Development',
    description: (
      <span>
        Build, test, internal review. 100% test coverage is the starting point.
        We write contracts the way auditors want to read them - documented,
        modular, and without shortcuts.
      </span>
    ),
  },
  {
    title: 'Full-Stack Development',
    description: (
      <span>
        Backend APIs, frontend dashboards, mobile apps if needed. We&apos;ve
        delivered the entire stack on InvariFi - we can do the same for your
        project.
      </span>
    ),
  },
  {
    title: 'Audit & Deployment',
    description: (
      <span>
        Third-party audit coordination, issue resolution, testnet validation,
        mainnet deployment.
      </span>
    ),
  },
  {
    title: 'Post-Launch Support',
    description: (
      <span>
        Monitoring, upgrades, new mechanics. DeFi protocols evolve - we stay on
        to help yours do the same.
      </span>
    ),
  },
];
