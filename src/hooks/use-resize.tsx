import type { RefObject } from 'react';
import { useLayoutEffect } from 'react';

import { useStableCallback } from './use-stable-callback';

export function useResizeObserver<T extends Element>(
  ref: RefObject<T | null>,
  callback: ResizeObserverCallback,
  options?: ResizeObserverOptions,
) {
  const stableCallback = useStableCallback(callback);

  useLayoutEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const element = ref?.current;

    if (!element) {
      return;
    }

    try {
      const resizeObserver = new ResizeObserver(stableCallback);
      resizeObserver.observe(element, options);

      return () => {
        resizeObserver.disconnect();
      };
    } catch (error) {
      console.error('ResizeObserver error:', error);
    }
  }, [ref, stableCallback, options]);
}
