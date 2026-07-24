import { TechCard } from './tech-card';
import { TECH_DATA } from './tech-data';

import { GridBar, TextWithDot } from '~/components/common';

export function Technology() {
  return (
    <section className="bg-gray">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" />

        <div className="border-dark-gray grid grid-cols-1 border-b lg:grid-cols-2">
          <header className="border-dark-gray flex min-h-[100px] items-center border-b px-5 lg:border-b-0 2xl:min-h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase text-black md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
              _TECH STACK
            </h2>
          </header>
          <TextWithDot className="border-dark-gray flex flex-col justify-center !p-5 lg:border-l 2xl:!px-[40px] 2xl:!py-[60px] [&>div]:!text-[20px] [&>div]:!leading-[140%]">
            We select the stack based on your compliance requirements, asset
            class, and target chain — not by default
          </TextWithDot>
        </div>

        <div className="border-dark-gray mx-5 grid grid-cols-1 border-r md:grid-cols-2 xl:grid-cols-4 2xl:mx-[60px]">
          {TECH_DATA.map((tech) => (
            <TechCard
              key={tech.name}
              logo={tech.logo}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>

        <GridBar position="none" columns={1} />
      </div>
    </section>
  );
}

export default Technology;
