import { useCallback } from 'react';

/**
 * Refcounted body scroll-lock shared by all consumers (loader, mobile menu...):
 * lock on 0 -> 1, unlock on 1 -> 0, clamped at 0 so overlapping consumers don't
 * fight over a single `overflow` write. Pair each disableScroll() with exactly
 * one enableScroll().
 */
let lockCount = 0;

function lockBodyScroll() {
  lockCount += 1;

  if (lockCount === 1) {
    document.body.style.overflow = 'hidden';
  }
}

function unlockBodyScroll() {
  if (lockCount === 0) {
    return;
  }

  lockCount -= 1;

  if (lockCount === 0) {
    document.body.style.overflow = '';
  }
}

export function useEnableScroll() {
  // Stable identities — safe to use as effect deps.
  const enableScroll = useCallback(() => {
    unlockBodyScroll();
  }, []);

  const disableScroll = useCallback(() => {
    lockBodyScroll();
  }, []);

  return { enableScroll, disableScroll };
}
