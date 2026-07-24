import {
  ProcessSteps,
  type ProcessStep,
  type ProcessStepColor,
} from '~/components/common';

const STEPS: ProcessStep[] = [
  {
    number: '/01',
    title: 'LAUNCH ARCHITECTURE',
    description:
      "tokenomics review, presale structure, vesting schedule, TGE sequencing — we'll flag structural issues in the token model before smart contracts are written",
  },
  {
    number: '/02',
    title: 'SMART CONTRACT DEVELOPMENT',
    description:
      'presale, vesting, token contracts, 100% test coverage including edge cases — anti-snipe protection and load testing before deployment',
  },
  {
    number: '/03',
    title: 'LAUNCHPAD FRONTEND',
    description:
      'presale UI, countdown, progress tracking, wallet connect, claim dashboard — built for conversion, not just functionality',
  },
  {
    number: '/04',
    title: 'TGE COORDINATION',
    description:
      "liquidity provisioning, DEX listing, execution sequencing, monitoring during launch — we've done this, we know what to watch in the first 30 minutes",
  },
  {
    number: '/05',
    title: 'POST-LAUNCH',
    description:
      'vesting contract monitoring, distribution support, investor dashboard, emergency procedures',
  },
];

const COLORS: Record<string, ProcessStepColor> = {
  '/01': { bg: 'bg-[#F0D9CF]', hex: '#F0D9CF' },
  '/02': { bg: 'bg-[#E9C6BA]', hex: '#E9C6BA' },
  '/03': { bg: 'bg-[#ECBDB2]', hex: '#ECBDB2' },
  '/04': { bg: 'bg-[#DE9D8D]', hex: '#DE9D8D' },
  '/05': { bg: 'bg-[#DE846E]', hex: '#DE846E' },
};

export function HowWeWork() {
  return (
    <ProcessSteps
      heading="_HOW DO WE WORK?"
      intro="A step-by-step process we trust."
      items={STEPS}
      colors={COLORS}
      reverse
    />
  );
}

export default HowWeWork;
