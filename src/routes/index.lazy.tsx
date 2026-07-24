import { createLazyFileRoute, useRouter } from '@tanstack/react-router';
import { lazy, useRef } from 'react';

import { ErrorBoundary, Loader, SafeSection } from '~/components/common';
import { About, ReviewsCarousel } from '~/components/pages/home/about';
import { Academy } from '~/components/pages/home/academy';
import Cases from '~/components/pages/home/cases';
import { FirstScreen } from '~/components/pages/home/first-screen';
import Footer from '~/components/pages/home/footer';
import { Roadmap } from '~/components/pages/home/roadmap';
import { UpworkWidget } from '~/components/pages/home/upwork-widget';
import { useBreakpoint, useIsMounted } from '~/hooks';

const GetInTouch = lazy(() => import('~/components/pages/home/get-in-touch'));

export const Route = createLazyFileRoute('/')({
  component: Home,
});

function Home() {
  const firstScreenRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // No manual scrollTo(0, 0) here — it raced the loader's scroll lock; the
  // router's scrollRestoration owns first-load scroll.

  const isMounted = useIsMounted();
  const is3xl = useBreakpoint('3xl');
  const is2Xl = useBreakpoint('2xl');
  const isLg = useBreakpoint('lg');
  const isSm = useBreakpoint('sm');

  // Until mounted, keep the SSR defaults (all breakpoints false) so the
  // loader's first paint matches SSR.
  let squareSize = 30;
  let duckScale = 2;

  if (isMounted) {
    if (is3xl) {
      duckScale = 4;
      squareSize = 120;
    } else if (is2Xl) {
      duckScale = 3;
      squareSize = 100;
    } else if (isLg) {
      squareSize = 90;
      duckScale = 2.5;
    } else if (isSm) {
      squareSize = 75;
      duckScale = 2.125;
    }
  }

  return (
    <>
      <ErrorBoundary router={router} name="loader" fallback={null}>
        <Loader
          approximateSquareSize
          squareSize={squareSize}
          duckScale={duckScale}
        />
      </ErrorBoundary>

      <FirstScreen ref={firstScreenRef} />
      <SafeSection name="home-sections">
        <About />
        <Cases />
        <UpworkWidget />
        <Roadmap />
        <ReviewsCarousel />
        <GetInTouch />
        <Academy />
        <Footer />
      </SafeSection>
    </>
  );
}
