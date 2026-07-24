import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { RefObject } from 'react';

import { isDefined } from '~/utils';

export function useFirstAnimation(
  container: RefObject<HTMLDivElement | null>,
  top: RefObject<HTMLDivElement | null>,
  isEnabled: boolean,
) {
  useGSAP(
    () => {
      if (!isDefined(container.current) || !isEnabled) {
        return;
      }

      const topHeight = top.current?.clientHeight ?? 0;
      const viewHeight = window.innerHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          start: topHeight - viewHeight + ' top',
          end: topHeight + ' top',
          snap: {
            snapTo: 1,
            duration: 1,
            directional: true,
          },
        },
      });

      tl.add(
        gsap.set('.sub-block', {
          translateY: topHeight,
        }),
      );
      tl.add(
        gsap.to('.sub-block', {
          stagger: 0.1,
          translateY: topHeight - viewHeight,
          ease: 'power1.inOut',
        }),
      );
    },
    {
      scope: container,
      revertOnUpdate: true,
      dependencies: [isEnabled],
    },
  );
}
