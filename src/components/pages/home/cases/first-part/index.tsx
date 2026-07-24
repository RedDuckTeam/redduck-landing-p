import type { MouseEvent } from 'react';
import { useRef } from 'react';

import { CasesHeader } from './header';

import { CasesInfo } from '../data';
import { useCasesStore } from '../store';

import { cn } from '~/utils';

export function FirstPart() {
  const {
    selectedInfo,
    prevSelectedInfo,
    selectInfo,
    headerAnimationRef,
    setProjectsMenuOpened,
    setBlockchainMenuOpened,
  } = useCasesStore();

  const container = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    // Ignore the synthetic click fired after a swipe.
    const { swiped, setSwiped } = useCasesStore.getState();
    if (swiped) {
      setSwiped(false);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const threshold = rect.left + rect.width / 2;
    const mouseX = e.clientX;

    const isOnLeftPart = threshold > mouseX;

    selectInfo(selectedInfo + (isOnLeftPart ? -1 : 1));

    setProjectsMenuOpened(false);
    setBlockchainMenuOpened(false);
  };

  return (
    <div ref={container} className="flex flex-col divide-y max-lg:border-b">
      <CasesHeader />

      <div
        role="button"
        tabIndex={-2}
        onClick={handleClick}
        className={cn('relative min-h-[360px] flex-1 overflow-hidden')}
        onKeyDown={() => {
          headerAnimationRef?.pause();
          setProjectsMenuOpened(false);
          setBlockchainMenuOpened(false);
        }}
      >
        {CasesInfo.map((entry, index) => {
          let resultingClass = 'first-not-visible';
          if (index === selectedInfo) {
            resultingClass = 'first-visible';
          } else if (index === prevSelectedInfo) {
            resultingClass = 'first-prev';
          }

          return (
            <p
              key={`${entry.name}_${index}`}
              className={cn(
                'absolute left-10 top-1/2 -translate-y-1/2 bg-black',
                'text-[45px] font-medium uppercase md:text-[60px] 2xl:text-[80px]',
                resultingClass,
              )}
            >
              0{index + 1}/<br /> {entry.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
