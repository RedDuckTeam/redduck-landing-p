import type { ReactNode } from 'react';

import { ServiceCard, type ServiceCardData } from './service-card';

import { GridBar } from '../grid-bar';
import { TextWithDot } from '../text-with-dot';

import { cn } from '~/utils';

interface WhatWeBuildProps {
  services: ServiceCardData[];
  description?: ReactNode;
  gridClassName?: string;
  showBottomGridBar?: boolean;
}

export function WhatWeBuild({
  services,
  description,
  gridClassName,
  showBottomGridBar = false,
}: WhatWeBuildProps) {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" variant="concrete" />

        <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-2">
          <header className="border-concrete flex min-h-[100px] items-center border-b px-5 lg:border-b-0 2xl:min-h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase leading-[60px] text-white md:text-[30px] 2xl:text-[45px]">
              _WHAT WE BUILD
            </h2>
          </header>

          {description && (
            <TextWithDot className="border-concrete [&>svg]:fill-gray [&>div]:!text-gray !p-5 lg:border-l 2xl:!px-[40px] 2xl:!py-[60px] [&>div]:!text-[20px] [&>div]:!leading-[140%]">
              {description}
            </TextWithDot>
          )}
        </div>

        <div
          className={cn(
            'mx-5 grid grid-cols-1 gap-[40px] pb-[60px] pt-[40px] md:grid-cols-2 xl:grid-cols-3 2xl:mx-[60px]',
            gridClassName,
          )}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className={service.className}
            />
          ))}
        </div>

        {showBottomGridBar && <GridBar position="bottom" variant="concrete" />}
      </div>
    </section>
  );
}

export type { ServiceCardData };
export { ServiceCard };
