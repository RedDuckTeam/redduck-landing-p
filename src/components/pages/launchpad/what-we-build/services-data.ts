export interface ServiceItem {
  title: string;
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'PRESALE & PRIVATE SALE CONTRACTS',
    description:
      'Multi-stage presale mechanics, dynamic pricing, whitelist and allocation management, FCFS and pro-rata distribution built to handle simultaneous transactions without race conditions or fund loss',
  },
  {
    title: 'IDO LAUNCHPAD INFRASTRUCTURE',
    description:
      'Full launchpad platform, project listing, KYC integration, tier-based allocation, claim mechanics. Whitelabel solution available, deploy under your brand in weeks',
  },
  {
    title: 'TOKEN VESTING & DISTRIBUTION',
    description:
      'Cliff and linear vesting, multi-beneficiary distribution, team and investor lockups, emergency pause logic. The contracts that run for 2 to 3 years after launch, they need to be right',
  },
  {
    title: 'TGE INFRASTRUCTURE',
    description:
      'Token generation event mechanics, liquidity provisioning, DEX listing automation, initial price discovery. Coordinated launch execution across contracts, liquidity pools, and exchange listings',
  },
  {
    title: 'TOKEN CONTRACT DEVELOPMENT',
    description:
      "ERC-20 with anti-snipe protection, tax mechanics, blacklist/whitelist, burn and mint logic. We've built ERC-20 anti-sniping protection as a standalone service, snipers are predictable and so are the defenses",
  },
  {
    title: 'ICO & PUBLIC SALE MECHANICS',
    description:
      'Public sale contracts, payment handling (ETH, USDT, USDC), price feeds, contribution limits, refund logic',
  },
  {
    title: 'WHITELABEL LAUNCHPAD',
    description:
      'Ready-to-deploy IDO launchpad platform: configurable tier system, token allocation, claim mechanics, admin dashboard. Your brand, your token, weeks not months to launch',
  },
];
