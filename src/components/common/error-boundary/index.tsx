import * as Sentry from '@sentry/tanstackstart-react';
import type { AnyRouter } from '@tanstack/react-router';
import { Component, type ErrorInfo, type ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  /** Rendered once a descendant throws; receives the error. Defaults to a notice. */
  fallback?: ReactNode | ((error: Error) => ReactNode);
  /**
   * When provided, the boundary subscribes to `onResolved` and clears its error
   * state on the next navigation — but only while errored, so children are not
   * remounted (their mount effects don't re-fire). Pass `useRouter()`.
   */
  router?: AnyRouter;
  /** Label attached to the Sentry report so an error maps to a section/widget. */
  name?: string;
  /** Called after the error is reported to Sentry (e.g. to trigger a reload). */
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Reusable React error boundary. Always re-reports to Sentry (never swallows),
 * renders `fallback` once a descendant throws, and resets on navigation by
 * subscribing to the router's `onResolved` rather than remounting via `key`.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  private unsubscribe?: () => void;

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidMount(): void {
    const { router } = this.props;

    if (!router) {
      return;
    }

    // Reset on navigation, but only while errored — so a healthy subtree is
    // never re-rendered and children are not remounted on every navigation.
    this.unsubscribe = router.subscribe('onResolved', () => {
      if (this.state.hasError) {
        this.setState({ hasError: false, error: null });
      }
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe?.();
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    const { name, onError } = this.props;

    // Always re-report — recover the UI but never hide the failure from Sentry.
    Sentry.captureException(error, {
      tags: { errorBoundary: name ?? 'unnamed' },
      extra: { componentStack: info.componentStack },
    });

    onError?.(error, info);
  }

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (!hasError) {
      return children;
    }

    if (typeof fallback === 'function') {
      return fallback(error ?? new Error('Unknown error'));
    }

    if (fallback !== undefined) {
      return fallback;
    }

    return (
      <div
        role="alert"
        className="flex min-h-[120px] w-full items-center justify-center p-4 text-center text-sm text-gray-400"
      >
        Something went wrong loading this section.
      </div>
    );
  }
}
