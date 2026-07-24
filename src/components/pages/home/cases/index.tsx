import { useRef } from 'react';

import { FirstPart } from './first-part';
import { SecondPart } from './second-part';
import { useCasesStore } from './store';
import { useAnimations } from './use-animations';

import { CustomSection } from '~/components/common';
import { useSwipe } from '~/hooks';

function Cases() {
  const container = useRef<HTMLDivElement>(null);

  const { headerAnimationRef, setProjectsMenuOpened, setBlockchainMenuOpened } =
    useCasesStore();

  useAnimations({ container });

  const advance = (delta: number) => {
    // Read live state — the render-closure index may be stale.
    const { selectedInfo, selectInfo, headerAnimationRef, setSwiped } =
      useCasesStore.getState();

    setSwiped(true);

    selectInfo(selectedInfo + delta);
    headerAnimationRef?.pause();

    setProjectsMenuOpened(false);
    setBlockchainMenuOpened(false);
  };

  const swipe = useSwipe({
    onSwipeLeft: () => advance(1),
    onSwipeRight: () => advance(-1),
  });

  const onTouchStart: typeof swipe.onTouchStart = (e) => {
    // Reset so the guard only eats the click right after its own swipe.
    useCasesStore.getState().setSwiped(false);
    swipe.onTouchStart(e);
  };

  return (
    <CustomSection id="cases" className="bg-black *:flex *:flex-col *:!py-0">
      <div
        {...swipe}
        onTouchStart={onTouchStart}
        role="button"
        ref={container}
        onClick={() => {
          // Ignore the synthetic click fired after a swipe.
          if (useCasesStore.getState().swiped) {
            useCasesStore.getState().setSwiped(false);
            return;
          }

          const isPaused = headerAnimationRef?.paused();

          if (isPaused) {
            headerAnimationRef?.play();
          } else {
            headerAnimationRef?.pause();
          }
        }}
        onKeyDown={() => {
          const isPaused = headerAnimationRef?.paused();

          if (isPaused) {
            headerAnimationRef?.play();
          } else {
            headerAnimationRef?.pause();
          }
        }}
        tabIndex={-1}
        className="flex flex-1 cursor-auto touch-pan-y flex-col border-b *:flex-1 lg:min-h-[900px] lg:flex-row lg:divide-x 2xl:min-h-[90vh]"
      >
        <FirstPart />

        <SecondPart />
      </div>
    </CustomSection>
  );
}

export default Cases;
