import type { RouteValue } from '~/types';

export const Route = {
  Home: {
    Base: '/',
    Cases: '#cases',
    FAQ: '#faq',
    Blog: '#blog',
  },
  Services: {
    RWA: '/services/rwa',
    DEFI: '/services/defi-development',
    WALLET: '/services/wallet-development',
    SMART_CONTRACTS: '/services/smart-contract-development',
    DEFI_SECURITY: '/services/defi-security-audit',
    PREDICTION_MARKET: '/services/prediction-market-development',
    DAO: '/services/dao-development',
    LAUNCHPAD: '/services/launchpad',
    ZK: '/services/zk-development',
    GAMEFI: '/services/gamefi-development',
  },
  AboutUs: {
    Base: '/about',
    OurTeam: '#ourTeam',
    Partners: '/about/#partners',
    Vacancies: '/about/#vacancies',
    Academy: '#blockchainAcademy',
    TermsAndConditions: '/about/#terms-and-conditions',
    GetInTouch: '#getInTouch',
    Memorandum: 'https://public.redduck.io/RedDuck_MEMO.pdf',
  },
} as const satisfies Record<string, RouteValue>;
