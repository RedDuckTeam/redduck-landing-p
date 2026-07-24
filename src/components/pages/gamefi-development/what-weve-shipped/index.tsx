import { CustomSection } from '~/components/common';
import { cn } from '~/utils';

type Project = {
  name: string;
  description: string;
};

const LEFT_PROJECTS: Project[] = [
  {
    name: 'GMX Fork',
    description: 'Custom perpetuals trading interface with GambleFi mechanics',
  },
  {
    name: 'Cuberium',
    description:
      'NFT Metaverse with spatial asset management and on-chain land ownership',
  },
  {
    name: 'P2E Game',
    description:
      'With NFT battle mechanics, staking, and in-game economy $6.7M+ raised in presale: 10-stage launch, full smart contract and game infrastructure built by RedDuck',
  },
];

const CRIMECASH: Project = {
  name: 'CrimeCash',
  description:
    'NFT GameFi project with battle mechanics and on-chain asset ownership',
};

function ProjectCell({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col justify-center gap-5 p-5 2xl:p-[40px]',
        className,
      )}
    >
      <p className="ibm-plex-mono text-[20px] uppercase">{project.name}</p>
      <p className="text-[18px] leading-[1.4]">{project.description}</p>
    </div>
  );
}

export function WhatWeveShipped() {
  return (
    <CustomSection className="text-gray bg-black">
      <header className="border-concrete flex min-h-[100px] items-center border-y px-5 2xl:min-h-[150px] 2xl:px-[60px]">
        <h2 className="ibm-plex-mono text-[24px] font-medium uppercase leading-[60px] text-white md:text-[30px] 2xl:text-[45px]">
          _What we&apos;ve shipped
        </h2>
      </header>

      <div className="px-5 pt-[40px] lg:px-[40px] 2xl:px-[60px]">
        <div className="border-concrete border">
          <div className="grid grid-cols-1 lg:min-h-[652px] lg:grid-cols-2">
            <div className="border-concrete flex flex-col lg:border-r">
              {LEFT_PROJECTS.map((project) => (
                <ProjectCell
                  key={project.name}
                  project={project}
                  className="border-concrete border-b"
                />
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex max-h-[544px] min-h-[300px] flex-1 items-center justify-center overflow-hidden">
                <img
                  src="/images/gamefi/shipped-nft.webp"
                  alt="Pixel-art NFT game character"
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <ProjectCell project={CRIMECASH} className="flex-none" />
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}

export default WhatWeveShipped;
