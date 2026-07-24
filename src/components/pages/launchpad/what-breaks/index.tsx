import { type KeyboardEvent, type MouseEvent, useRef } from 'react';

import { WhatBreaksInfo } from './data';
import { useWhatBreaksStore } from './store';
import { useAnimations } from './use-animations';

import { GridBar } from '~/components/common';
import { useSwipe } from '~/hooks';
import { cn } from '~/utils';

const TOTAL = WhatBreaksInfo.length;

function Progress() {
  const { selectedInfo } = useWhatBreaksStore();

  return (
    <div className="flex h-[8px] flex-row gap-[10px]">
      {Array(TOTAL)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1} of ${TOTAL}`}
            className="bg-concrete flex-1"
            onClick={(e) => {
              e.stopPropagation();
              const { selectInfo, timelineRef } = useWhatBreaksStore.getState();
              selectInfo(index);
              timelineRef?.pause();
            }}
          >
            <div
              className={cn(
                'h-full bg-white',
                selectedInfo === index && 'what-breaks-active w-full',
                selectedInfo > index && 'what-breaks-passed w-full',
                selectedInfo < index && 'what-breaks-soon w-0',
              )}
            />
          </button>
        ))}
    </div>
  );
}

export function WhatBreaks() {
  const container = useRef<HTMLDivElement>(null);
  const swipedRef = useRef(false);

  const { selectedInfo } = useWhatBreaksStore();

  useAnimations({ container });

  const go = (delta: number) => {
    const { selectedInfo, selectInfo } = useWhatBreaksStore.getState();
    selectInfo(selectedInfo + delta);
  };

  const swipe = useSwipe({
    onSwipeLeft: () => {
      swipedRef.current = true;
      go(1);
    },
    onSwipeRight: () => {
      swipedRef.current = true;
      go(-1);
    },
  });

  const handleSlideClick = (e: MouseEvent<HTMLDivElement>) => {
    // Ignore the synthetic click fired right after a swipe.
    if (swipedRef.current) {
      swipedRef.current = false;
      return;
    }
    const { left, width } = e.currentTarget.getBoundingClientRect();
    go(e.clientX < left + width / 2 ? -1 : 1);
  };

  const handleSlideKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  };

  return (
    <section className="bg-black text-white">
      <div
        ref={container}
        className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px] border-t"
      >
        <GridBar position="top" variant="concrete" />

        <div className="border-concrete flex h-[80px] items-center border-b px-5 md:h-[100px] lg:px-[40px] 2xl:h-[150px] 2xl:px-[60px]">
          <p className="text-[20px] uppercase leading-none 2xl:text-[24px]">
            _what breaks at tge and how we prevent it
          </p>
        </div>

        <div className="border-concrete flex flex-col gap-[40px] border-b px-5 py-[40px] lg:px-[40px] 2xl:px-[60px]">
          <Progress />
          <p className="text-center text-[20px] leading-none 2xl:text-[24px]">
            {selectedInfo + 1}/{TOTAL}
          </p>
        </div>

        <div
          {...swipe}
          role="button"
          tabIndex={0}
          aria-label="Slide navigation. Use the left and right arrow keys to move between slides."
          onClick={handleSlideClick}
          onKeyDown={handleSlideKeyDown}
          className="grid min-h-[420px] cursor-pointer touch-pan-y grid-cols-1 motion-reduce:block motion-reduce:min-h-0 lg:min-h-[480px]"
        >
          {WhatBreaksInfo.map((slide, index) => {
            return (
              <div
                key={`${slide.title}_${index}`}
                className={cn(
                  'col-start-1 row-start-1 flex flex-col justify-center gap-5 px-5 py-10 transition-opacity duration-500 motion-reduce:opacity-100 lg:px-[40px] 2xl:gap-8 2xl:px-[60px]',
                  selectedInfo === index
                    ? 'opacity-100'
                    : 'pointer-events-none opacity-0 motion-reduce:pointer-events-auto',
                )}
              >
                <p className="ibm-plex-mono text-[28px] font-medium uppercase leading-tight md:text-[40px] 2xl:text-[56px]">
                  0{index + 1}/
                  <br />
                  {slide.title}
                </p>
                <p className="text-base leading-snug text-white/60 md:text-lg 2xl:text-xl">
                  {slide.problem} {slide.solution}
                </p>
              </div>
            );
          })}
        </div>

        <GridBar position="bottom" variant="concrete" />
      </div>
    </section>
  );
}

export default WhatBreaks;
