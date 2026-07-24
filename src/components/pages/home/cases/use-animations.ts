import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

import { SLIDE_DURATION } from './constants';
import { CasesInfo } from './data';
import { useCasesStore } from './store';

// ~/utils registers ScrollTrigger before exporting gsap.
import { gsap, ScrollTrigger, isDefined } from '~/utils';

export function useAnimations({
  container,
}: {
  container: React.RefObject<HTMLDivElement | null>;
}) {
  const headerAnimationRef = useRef<gsap.core.Timeline>(null);

  const {
    selectInfo,
    selectedInfo,
    blockchainMenuOpened,
    setBlockchainMenuOpened,
    setHeaderAnimationRef,
    projectsMenuOpened,
    setProjectsMenuOpened,
  } = useCasesStore();

  useEffect(() => {
    const id =
      'requestIdleCallback' in window
        ? requestIdleCallback(() => ScrollTrigger.refresh())
        : setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      if (!id) return;
      if ('cancelIdleCallback' in window) {
        cancelIdleCallback(Number(id));
        return;
      }
      clearTimeout(id);
    };
  }, []);

  useGSAP(
    () => {
      if (!container.current) {
        return;
      }

      gsap.set('.header-soon', {
        width: '0%',
      });

      gsap.set('.header-passed', {
        width: '100%',
      });

      const isPrevPaused = headerAnimationRef?.current?.paused();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.header',
          toggleActions: 'play pause play pause',
        },
      });

      tl.add(
        gsap.fromTo(
          '.header-active',
          { width: '0%' },
          {
            width: '100%',
            duration: SLIDE_DURATION / 1000,
            ease: 'power2.inOut',
            onComplete: () => {
              selectInfo(selectedInfo + 1);
              setBlockchainMenuOpened(false);
              setProjectsMenuOpened(false);
            },
          },
        ),
      );

      if (
        isDefined(CasesInfo[selectedInfo]?.blockChainGroups) ||
        isDefined(CasesInfo[selectedInfo]?.notableProjects)
      ) {
        tl.add(
          gsap.to('.header-active', {
            onStart: () => {
              setBlockchainMenuOpened(false);
              setProjectsMenuOpened(false);
            },
          }),
          '-=0.6',
        );
      }

      if (isPrevPaused) {
        setTimeout(() => {
          tl.pause();
        }, 50);
      }

      headerAnimationRef.current = tl;
      setHeaderAnimationRef(tl);
    },
    {
      scope: container,
      revertOnUpdate: true,
      dependencies: [SLIDE_DURATION, selectedInfo],
    },
  );

  useGSAP(
    () => {
      if (!container.current) {
        return;
      }

      gsap.set('.first-not-visible', { opacity: '0%' });

      gsap.fromTo(
        '.first-prev',
        { translateX: '0px', opacity: '100%' },
        {
          translateX: '-200px',
          opacity: '0%',
          ease: 'power4.out',
        },
      );

      gsap.fromTo(
        '.first-visible',
        { translateX: '200px', opacity: '0%' },
        {
          translateX: '0px',
          opacity: '100%',
          ease: 'power4.out',
        },
      );
    },
    {
      scope: container,
      dependencies: [selectedInfo],
    },
  );

  useGSAP(
    () => {
      if (!isDefined(container.current)) {
        return;
      }

      gsap.to('.second-not-visible', {
        maxHeight: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        borderTopWidth: 0,
        ease: 'power2.inOut',
      });

      gsap.to('.second-visible', {
        maxHeight: '275px',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderTopWidth: 1,
        ease: 'power2.inOut',
      });
    },
    {
      scope: container,
      dependencies: [blockchainMenuOpened, projectsMenuOpened],
    },
  );
}
