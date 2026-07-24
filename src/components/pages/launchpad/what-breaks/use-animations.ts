import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { SLIDE_DURATION } from './constants';
import { useWhatBreaksStore } from './store';

// ~/utils registers ScrollTrigger before exporting gsap.
import { gsap } from '~/utils';

export function useAnimations({
  container,
}: {
  container: React.RefObject<HTMLDivElement | null>;
}) {
  const { selectInfo, selectedInfo, setTimelineRef } = useWhatBreaksStore();

  // Local mirror so a recreated timeline inherits the previous paused state.
  const timelineLocalRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!container.current) {
        return;
      }

      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      if (reduce) {
        return;
      }

      gsap.set('.what-breaks-soon', { width: '0%' });
      gsap.set('.what-breaks-passed', { width: '100%' });

      const isPrevPaused = timelineLocalRef.current?.paused();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play pause play pause',
        },
      });

      tl.add(
        gsap.fromTo(
          '.what-breaks-active',
          { width: '0%' },
          {
            width: '100%',
            duration: SLIDE_DURATION / 1000,
            ease: 'power2.inOut',
            onComplete: () => {
              selectInfo(selectedInfo + 1);
            },
          },
        ),
      );

      // Re-apply a manual pause after selectedInfo recreates the timeline.
      let pauseTimeout: ReturnType<typeof setTimeout> | undefined;
      if (isPrevPaused) {
        pauseTimeout = setTimeout(() => {
          tl.pause();
        }, 50);
      }

      timelineLocalRef.current = tl;
      setTimelineRef(tl);

      // useGSAP runs this on revert (selectedInfo change) and unmount.
      return () => {
        if (pauseTimeout) clearTimeout(pauseTimeout);
      };
    },
    {
      scope: container,
      revertOnUpdate: true,
      dependencies: [SLIDE_DURATION, selectedInfo],
    },
  );
}
