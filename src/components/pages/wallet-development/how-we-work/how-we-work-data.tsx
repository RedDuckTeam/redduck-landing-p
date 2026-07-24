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
        We define custody model, key management approach, chain support, and
        security requirements before any code is written. If your use case needs
        MPC instead of multisig — or account abstraction instead of EOA —
        we&apos;ll tell you in discovery.
      </span>
    ),
  },
  {
    title: 'Smart Contract & Protocol Layer',
    description: (
      <span>
        For smart contract wallets, multisig contracts, vault logic — written,
        tested, and delivered with 100% branch coverage before audit submission.
      </span>
    ),
  },
  {
    title: 'Mobile & Web Development',
    description: (
      <span>
        iOS, Android, and web interfaces built to production standard.
        We&apos;ve delivered the full stack — wallet core, mobile app, and
        backend — as a single team.
      </span>
    ),
  },
  {
    title: 'On-Ramp & Integration',
    description: (
      <span>
        Fiat on-ramp provider integration, WalletConnect flows, and third-party
        API integrations. Edge cases handled: payment failures, pending states,
        and KYC drop-offs.
      </span>
    ),
  },
  {
    title: 'Audit, Launch & Support',
    description: (
      <span>
        Security audit coordination, App Store submission, and post-launch
        monitoring. We don&apos;t disappear after launch.
      </span>
    ),
  },
];
