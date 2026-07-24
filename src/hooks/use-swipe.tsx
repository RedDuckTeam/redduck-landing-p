import { useRef, type TouchEvent } from 'react';

interface UseSwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  /** Minimum horizontal distance (px) to count as a swipe. */
  threshold?: number;
}

/**
 * Touch swipe detection for mobile carousels. Returns handlers to spread onto
 * the swipeable element. Ignores mostly-vertical drags so page scrolling is
 * preserved.
 */
export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: UseSwipeOptions) {
  const start = useRef<{ x: number; y: number } | null>(null);

  function onTouchStart(e: TouchEvent) {
    const touch = e.touches[0];
    start.current = { x: touch.clientX, y: touch.clientY };
  }

  function onTouchEnd(e: TouchEvent) {
    if (!start.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - start.current.x;
    const dy = touch.clientY - start.current.y;
    start.current = null;

    if (Math.abs(dx) < threshold || Math.abs(dx) <= Math.abs(dy)) return;

    if (dx < 0) onSwipeLeft?.();
    else onSwipeRight?.();
  }

  return { onTouchStart, onTouchEnd };
}
