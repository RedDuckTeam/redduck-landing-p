import { useRouter } from '@tanstack/react-router';
import { Suspense, type ReactNode } from 'react';

import { ErrorBoundary } from '../error-boundary';

import { reloadOnce } from '~/utils';

export interface SafeSectionProps {
  children: ReactNode;
  /**
   * Shown while a lazy descendant loads (Suspense) and as the boundary fallback
   * on error. Pass a render function to `ErrorBoundary` if they must differ.
   */
  fallback?: ReactNode;
  /** Section label forwarded to Sentry when the boundary catches an error. */
  name?: string;
}

/**
 * `<Suspense>` (lazy-chunk loading) wrapping an `ErrorBoundary` (render-crash
 * recovery). Wired to the router so it resets on navigation without remounting
 * children, and to `reloadOnce` so a stale-chunk error recovers with one reload.
 *
 * Suspense is OUTER so a chunk 404 (rejected dynamic import) surfaces as a throw
 * the inner boundary can catch and reload past.
 */
export function SafeSection({ children, fallback, name }: SafeSectionProps) {
  const router = useRouter();

  return (
    <Suspense fallback={fallback}>
      <ErrorBoundary
        router={router}
        name={name}
        fallback={fallback}
        onError={() => reloadOnce(`safe-section:${name ?? 'unnamed'}`)}
      >
        {children}
      </ErrorBoundary>
    </Suspense>
  );
}
