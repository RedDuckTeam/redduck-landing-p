import { useState } from 'react';

import { cn } from '~/utils';

interface WorkStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: WorkStep[] = [
  {
    number: '01',
    title: 'Game & economy design mechanics',
    description:
      'Game & economy design mechanics, token model, reward loops, staking design — before smart contracts are written this is where most GameFi projects go wrong and we fix it first.',
  },
  {
    number: '02',
    title: 'Smart contract development game logic',
    description:
      'Smart contract development — game logic, NFT contracts, staking vaults, VRF integration, prize distribution. 100% test coverage, audit-ready.',
  },
  {
    number: '03',
    title: 'Frontend & game interface',
    description:
      'Frontend & game interface — battle UI, inventory, leaderboards, staking dashboard built for players, not for investors scrolling a landing page.',
  },
  {
    number: '04',
    title: 'Launch infrastructure',
    description:
      "Launch infrastructure — presale contracts, IDO mechanics, token distribution, vesting. We've run $6.7M+ presales, we know what breaks under load.",
  },
  {
    number: '05',
    title: 'Post-launch support',
    description:
      'Post-launch support — season resets, new game mechanics, economy rebalancing, monitoring. GameFi products need ongoing development, we stay on.',
  },
];

export function HowWeWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-pink text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _How do we work?
          </h2>
        </header>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-dark-gray grid grid-cols-1 border-x lg:grid-cols-[1fr_1fr_500px] 2xl:grid-cols-[1fr_1fr_600px]">
            <div className="border-dark-gray flex flex-col border-b lg:border-b-0 lg:border-r">
              {STEPS.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                  className={cn(
                    'border-dark-gray relative flex flex-1 items-center gap-5 border-b p-5 text-left last:border-b-0 lg:p-8 2xl:p-[40px]',
                    index === active && 'bg-[#d8c4bc]',
                  )}
                >
                  <span className="text-red ibm-plex-mono shrink-0 text-[18px] leading-[30px] 2xl:text-[24px]">
                    {step.number}.
                  </span>
                  <span className="ibm-plex-mono text-[16px] uppercase leading-[130%] 2xl:text-[24px]">
                    {step.title}
                  </span>
                  {index === active && (
                    <span
                      aria-hidden
                      className="border-l-red absolute right-0 top-1/2 hidden size-0 -translate-y-1/2 border-y-[10px] border-l-[14px] border-y-transparent lg:block"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="border-dark-gray flex flex-col gap-5 border-b px-5 py-10 lg:border-b-0 lg:border-r lg:px-[40px] lg:py-[60px]">
              <span className="block size-[10px] bg-black" />
              <p className="text-[18px] leading-[1.4] 2xl:text-[20px]">
                {STEPS[active].description}
              </p>
            </div>

            <div className="flex items-stretch justify-center overflow-hidden bg-gradient-to-b from-[#c4c3bf] to-[#cac9c5]">
              <img
                src="/images/gamefi/how-we-work-computer.webp"
                alt="Retro RedDuck computer on a concrete pedestal"
                loading="lazy"
                width={600}
                height={500}
                className="h-full min-h-[360px] w-full object-cover 2xl:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
