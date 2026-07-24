import { CasesInfo } from '../data';
import { useCasesStore } from '../store';

import { cn } from '~/utils';

function Progress() {
  const {
    selectedInfo,
    selectInfo,
    setBlockchainMenuOpened,
    headerAnimationRef,
    setProjectsMenuOpened,
  } = useCasesStore();

  return (
    <div className="flex h-[10px] flex-row gap-[10px]">
      {Array(CasesInfo.length)
        .fill(0)
        .map((_, index) => {
          return (
            <button
              key={index}
              className="flex-1 bg-white/10"
              aria-label={`Go to case ${index + 1} of ${CasesInfo.length}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                selectInfo(index);
                headerAnimationRef?.pause();

                setBlockchainMenuOpened(false);
                setProjectsMenuOpened(false);
              }}
            >
              <div
                className={cn(
                  'bg-gray h-full',
                  selectedInfo === index && 'header-active',
                  selectedInfo > index && 'header-passed',
                  selectedInfo < index && 'header-soon',
                )}
              />
            </button>
          );
        })}
    </div>
  );
}

export function CasesHeader() {
  const { selectedInfo } = useCasesStore();

  return (
    <div className="header flex h-[90px] flex-col justify-center gap-[30px] px-[20px] md:h-[120px] 2xl:h-[160px] 2xl:gap-[40px] 2xl:px-[40px]">
      <Progress />

      <p className="flex flex-row items-center justify-between text-[20px] leading-none 2xl:text-[24px]">
        <span className="uppercase">_expertise</span>
        <span>
          {selectedInfo + 1}/{CasesInfo.length}
        </span>
      </p>
    </div>
  );
}
