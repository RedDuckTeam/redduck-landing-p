import { useEffect, useState, type RefObject } from 'react';

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options?: { threshold?: number; rootMargin?: string },
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: options?.threshold ?? 0, rootMargin: options?.rootMargin },
    );
    io.observe(el);

    return () => io.disconnect();
  }, [ref, options?.threshold, options?.rootMargin]);

  return inView;
}
