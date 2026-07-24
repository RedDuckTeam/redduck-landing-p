import { CustomSection } from '~/components/common';
import { cn } from '~/utils';

const PROJECTS = [
  {
    name: 'DigiToads',
    description:
      '$6.7M+ raised across a 10-stage presale. Full presale smart contract infrastructure built by RedDuck.',
  },
  { name: 'Equitify', description: 'IDO launchpad, hackathon winner.' },
  {
    name: 'RedDuck Launchpad',
    description: 'Whitelabel launchpad solution, production-ready.',
  },
];

export function WhatWeveShipped() {
  return (
    <CustomSection className="text-gray bg-black px-5 lg:px-[40px] 2xl:px-[60px]">
      <div className="border-concrete grid grid-cols-1 border lg:min-h-[520px] lg:grid-cols-2 2xl:min-h-[652px]">
        <div className="border-concrete flex min-h-[360px] items-center justify-center border-b lg:min-h-0 lg:border-b-0 lg:border-r">
          <img
            src="/images/launchpad/shipped-rocket.webp"
            alt="RedDuck launch"
            width={538}
            height={652}
            className="size-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="border-concrete flex flex-1 items-center border-b px-5 py-8 2xl:px-[40px]">
            <h2 className="ibm-plex-mono text-[28px] font-medium uppercase leading-tight md:text-[36px] 2xl:text-[45px] 2xl:leading-[60px]">
              _What we&apos;ve shipped
            </h2>
          </div>
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className={cn(
                'border-concrete flex flex-1 flex-col justify-center gap-5 px-5 py-8 2xl:px-[40px]',
                index < PROJECTS.length - 1 && 'border-b',
              )}
            >
              <p className="ibm-plex-mono text-[20px] uppercase">
                {project.name}
              </p>
              <p className="text-[18px] leading-[1.4]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </CustomSection>
  );
}

export default WhatWeveShipped;
