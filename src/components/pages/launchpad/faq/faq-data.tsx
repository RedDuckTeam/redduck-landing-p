import type { FaqEntry } from '~/components/common/faq';

export const FAQ_DATA: FaqEntry[] = [
  {
    question: 'Whitelabel launchpad or custom?',
    answer:
      'Whitelabel if you want to run IDOs fast with proven infrastructure. Custom if you have specific mechanics, unique tier systems, cross-chain launches, or custom allocation logic — we will tell you which in the first call.',
  },
  {
    question: 'Do you review tokenomics or just implement them?',
    answer:
      'Both. We have seen enough launches to know which tokenomics models create sell pressure at TGE and which sustain price — we will flag issues before they become smart contracts.',
  },
  {
    question: 'How do you handle anti-sniping?',
    answer:
      'At the contract level: transaction limits at launch, anti-bot patterns, launch block mechanics. We offer ERC-20 anti-sniping protection as a standalone service if you already have a token contract.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Presale contracts and frontend: 3 to 5 weeks. Full IDO launchpad (custom): 8 to 12 weeks. Whitelabel deployment: 2 to 4 weeks.',
  },
  {
    question: 'Can you handle a large presale?',
    answer:
      'We built the infrastructure for a $6.7M+ presale with 10 stages — yes.',
  },
];
