import type { RefObject } from 'react';

import { MainText } from './main-text';

import { CustomSection, LandingHeader } from '~/components/common';
import { buttonVariants } from '~/components/ui';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

export function FirstScreen({
  ref,
}: {
  ref?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <CustomSection
      id="top"
      ref={ref}
      className="bg-gray relative h-screen overflow-hidden text-black *:flex *:h-full *:flex-col *:!pt-0"
    >
      <LandingHeader className="relative" />

      <div
        className={cn(
          'relative flex flex-1 flex-col md:grid',
          'grid-cols-1 2xl:grid-cols-[1360fr_560fr]',
          'grid-rows-[1fr_auto_auto] 2xl:grid-rows-[1fr_380px]',
          'border-y',
        )}
      >
        <MainText />

        <div
          className={cn(
            'flex items-start 2xl:col-span-1 2xl:items-center',
            'px-5 py-10 2xl:p-[60px]',
            'border-b 2xl:border-b-0 2xl:border-r',
          )}
        >
          <h1 className="3xl:text-[85px] 5xl:text-[90px] text-[34px] font-medium uppercase leading-[100%] max-md:w-full md:text-[48px] xl:text-[56px] 2xl:text-[80px]">
            Blockchain consulting & development partner
          </h1>
        </div>

        <div
          className={cn(
            'flex 2xl:col-span-1 2xl:min-w-[500px]',
            'flex-col items-start justify-end min-[900px]:flex-row min-[900px]:items-center 2xl:flex-col 2xl:items-start',
            'gap-5 px-5 py-10 2xl:gap-10 2xl:p-[50px]',
            '*:w-full max-2xl:*:flex-1',
          )}
        >
          <a
            href="#getInTouch"
            className={cn(
              buttonVariants(),
              'text-center font-normal max-2xl:!h-[60px] max-2xl:!max-h-[60px] max-2xl:!py-[17px] max-2xl:!text-[20px] max-2xl:uppercase',
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
              'text-center font-normal max-2xl:!h-[60px] max-2xl:!max-h-[60px] max-2xl:!py-[17px] max-2xl:!text-[20px] max-2xl:uppercase',
            )}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </CustomSection>
  );
}

export default FirstScreen;
