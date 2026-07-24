import {
  ProcessSteps,
  type ProcessStep,
  type ProcessStepColor,
} from '~/components/common';

const STEPS: ProcessStep[] = [
  {
    number: '/01',
    title: 'Problem definition',
    description:
      "ZK is a tool, not a product, we start by defining exactly what needs to be proven and what needs to remain private most ZK projects fail here: proving the wrong thing, or proving it in a way that's too expensive to verify on-chain",
  },
  {
    number: '/02',
    title: 'Circuit design & architecture',
    description:
      'circuit logic, constraint system design, proof system selection (Groth16 vs PLONK vs Halo2) tradeoffs between proof size, verification cost, and proving time, decided here, not after implementation',
  },
  {
    number: '/03',
    title: 'Circuit development & testing',
    description:
      'circuit implementation, constraint validation, edge case testing ZK bugs are not like regular bugs, invalid constraints can create soundness vulnerabilities that are exploitable without detection',
  },
  {
    number: '/04',
    title: 'Smart contract integration',
    description:
      'on-chain verifier contracts, integration with protocol logic, gas optimization for verification on-chain ZK verification has real gas costs, we optimize the integration, not just the circuit',
  },
  {
    number: '/05',
    title: 'Audit & deployment',
    description:
      'ZK systems require specialized audit, we work with auditors who understand constraint systems, not just Solidity testnet deployment, proof system validation, mainnet launch',
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
