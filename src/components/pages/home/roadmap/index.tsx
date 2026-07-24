import { useState } from 'react';

import { ROADMAP_DATA } from './roadmap-data';
import { RoadmapList } from './roadmap-list';

import { CustomSection, LogoOnABlock, TextWithDot } from '~/components/common';
import { buttonVariants } from '~/components/ui';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

export function Roadmap() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <CustomSection
      id="developmentApproach"
      className="bg-pink relative flex flex-col *:!pb-0"
    >
      <div className="flex flex-1 flex-row border-y">
        <RoadmapList
          className="w-full lg:w-1/2 lg:border-r"
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

        <LogoOnABlock className="max-2xl:hidden" />

        <TextWithDot className="max-h-full flex-1 max-lg:hidden 2xl:hidden">
          {ROADMAP_DATA[selectedIndex]?.description}
        </TextWithDot>
      </div>

      <div
        className={cn(
          'border-dark-gray flex flex-col items-center justify-center gap-5 border-b px-5 py-[20px] md:flex-row',
          'md:py-[40px] 2xl:px-[40px] 2xl:py-[60px]',
        )}
      >
        <a
          href="#getInTouch"
          className={cn(
            buttonVariants(),
            'text-center font-normal max-sm:w-full sm:w-[400px]',
          )}
        >
          Get Pricing
        </a>
        <button
          type="button"
          onClick={() => {
            trackCalendlyClick();
            openCalendlyPopup();
          }}
          className={cn(
            buttonVariants(),
            'text-center font-normal max-sm:w-full sm:w-[400px]',
          )}
        >
          Schedule a Consultation
        </button>
      </div>
    </CustomSection>
  );
}

export default Roadmap;
