import { ZK_TECH_ROW_1, ZK_TECH_ROW_2, type ZkTechItem } from './data';

import { GridBar } from '~/components/common';

function TechCell({ item }: { item: ZkTechItem }) {
  return (
    <div className="border-concrete flex min-h-[280px] flex-col justify-center gap-6 border-b border-r p-5 md:min-h-[340px] md:gap-10 md:p-8 2xl:min-h-[460px] 2xl:gap-[60px] 2xl:p-[40px]">
      <span className="ibm-plex-mono text-red text-[16px] 2xl:text-[20px]">
        {item.number}
      </span>

      <div className="flex items-center">
        <img
          src={item.logo}
          alt={item.alt}
          loading="lazy"
          className="h-[40px] w-auto max-w-full object-contain object-left md:h-[44px] 2xl:h-[56px]"
        />
      </div>

      <p className="ibm-plex-mono text-[16px] uppercase leading-[140%] 2xl:text-[20px]">
        {item.label}
      </p>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <header className="border-concrete flex h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _TECH STACK
          </h2>
        </header>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-concrete border-x">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {ZK_TECH_ROW_1.map((item) => (
                <TechCell key={item.number} item={item} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {ZK_TECH_ROW_2.map((item) => (
                <TechCell key={item.number} item={item} />
              ))}
            </div>
          </div>
        </div>

        <GridBar position="bottom" variant="concrete" columns={1} />
      </div>
    </section>
  );
}

export default TechStack;
