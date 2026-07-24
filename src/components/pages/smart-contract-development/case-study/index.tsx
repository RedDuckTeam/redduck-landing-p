import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { CASE_STUDIES } from './data';

import { GridBar } from '~/components/common';
import { useSwipe } from '~/hooks';
import { cn } from '~/utils';

function CaseFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(560);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    let ro: ResizeObserver | null = null;

    function syncHeight() {
      const doc = iframe?.contentDocument;
      if (!doc) return;
      const h = Math.max(
        doc.documentElement.scrollHeight,
        doc.body?.scrollHeight ?? 0,
      );
      if (h > 0) setHeight(h);
    }

    function attachObserver() {
      const body = iframe?.contentDocument?.body;
      if (!body || !('ResizeObserver' in window)) return;
      ro?.disconnect();
      ro = new ResizeObserver(syncHeight);
      ro.observe(body);
    }

    function handleLoad() {
      syncHeight();
      attachObserver();
      iframe?.contentDocument?.fonts?.ready.then(syncHeight).catch(() => {});
    }

    iframe.addEventListener('load', handleLoad);
    if (iframe.contentDocument?.readyState === 'complete') handleLoad();
    window.addEventListener('resize', syncHeight);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', syncHeight);
      ro?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      style={{ height }}
      className="bg-gray w-full border-0"
    />
  );
}

function ArrowTriangle({
  direction,
  className,
}: {
  direction: 'left' | 'right';
  className?: string;
}) {
  const points = direction === 'left' ? '18,4 6,12 18,20' : '6,4 18,12 6,20';
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <polygon points={points} />
    </svg>
  );
}

function ExploreMoreLink({ href }: { href: string }) {
  const isMidas = href.includes('midas.app');
  return (
    <a
      href={href}
      target="_blank"
      rel={isMidas ? 'noopener noreferrer nofollow' : 'noopener noreferrer'}
      {...(isMidas ? { 'data-nosnippet': true } : {})}
      className="ibm-plex-mono inline-flex items-center gap-3 text-sm uppercase transition-transform md:text-base 2xl:text-2xl [@media(hover:hover)]:hover:scale-[1.02]"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-black text-white 2xl:size-12">
        <ArrowUpRight className="size-5 2xl:size-6" />
      </span>
      Explore more
    </a>
  );
}

export function CaseStudy() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const total = CASE_STUDIES.length;
  const current = CASE_STUDIES[index];

  const isFirst = index === 0;
  const isLast = index === total - 1;
  const hasMultiple = total > 1;

  const goTo = (target: number) => {
    const clamped = Math.max(0, Math.min(total - 1, target));
    if (clamped === index) return;
    setDirection(clamped > index ? 'next' : 'prev');
    setIndex(clamped);
  };
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const swipe = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev });

  if (!current) return null;

  return (
    <section className="bg-gray text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" />

        <header className="border-dark-gray flex h-[100px] items-center justify-between border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _CASE STUDY
          </h2>
          {hasMultiple && (
            <span className="ibm-plex-mono text-red text-[20px] md:text-[24px] 2xl:text-[30px]">
              {index + 1}/{total}
            </span>
          )}
        </header>

        <div
          {...swipe}
          className="border-dark-gray grid touch-pan-y grid-cols-1 lg:grid-cols-2 2xl:px-[60px]"
        >
          <div className="border-dark-gray flex items-center justify-center border-b lg:border-l lg:border-r">
            <div className="w-full">
              <img
                src={current.image}
                alt={current.imageAlt}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div
            key={index}
            className={cn(
              'flex flex-col',
              'motion-reduce:animate-none',
              direction === 'next'
                ? 'animate-caseSlideNext'
                : 'animate-caseSlidePrev',
            )}
          >
            {current.embedSrc ? (
              <div className="border-dark-gray flex flex-1 flex-col border-b border-r lg:min-h-[700px]">
                <CaseFrame
                  src={current.embedSrc}
                  title={`${current.title} case study`}
                />
                {current.link && (
                  <div className="mt-auto p-5 md:p-8 2xl:p-[40px]">
                    <ExploreMoreLink href={current.link} />
                  </div>
                )}
              </div>
            ) : (
              <div className="border-dark-gray flex flex-1 flex-col gap-6 border-b border-r p-5 md:p-8 lg:min-h-[700px] 2xl:gap-8 2xl:p-[40px]">
                <h3 className="ibm-plex-mono text-[20px] font-semibold uppercase leading-[140%] md:text-[24px] 2xl:text-[32px]">
                  {current.title}
                </h3>

                <div className="space-y-1 text-sm leading-[140%] md:text-base 2xl:text-xl">
                  {current.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="space-y-1">
                  <h4 className="ibm-plex-mono text-base font-bold uppercase 2xl:text-2xl">
                    WHAT WE BUILT:
                  </h4>
                  <ul className="space-y-2 text-sm leading-[140%] md:text-base 2xl:text-xl">
                    {current.whatWeBuilt.map((item) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <span
                          aria-hidden
                          className="block size-[6px] shrink-0 translate-y-[-1px] bg-current"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h4 className="ibm-plex-mono text-base font-bold uppercase 2xl:text-2xl">
                    RESULT:
                  </h4>
                  <ul className="space-y-2 text-sm leading-[140%] md:text-base 2xl:text-xl">
                    {current.result.map((item) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <span
                          aria-hidden
                          className="block size-[6px] shrink-0 translate-y-[-1px] bg-current"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {current.link && (
                  <div className="mt-auto pt-4">
                    <ExploreMoreLink href={current.link} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {hasMultiple && (
          <div className="border-dark-gray flex items-center justify-center gap-5 px-5 py-3 md:py-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              aria-label="Previous case study"
              className={cn(
                'transition-transform',
                isFirst
                  ? 'cursor-not-allowed text-black/30'
                  : 'text-red [@media(hover:hover)]:hover:scale-110',
              )}
            >
              <ArrowTriangle direction="left" className="fill-current" />
            </button>
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to case study ${i + 1}`}
                  className={cn(
                    'size-2 border border-black transition-colors',
                    i === index ? 'bg-red border-red' : 'bg-black',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Next case study"
              className={cn(
                'transition-transform',
                isLast
                  ? 'cursor-not-allowed text-black/30'
                  : 'text-red [@media(hover:hover)]:hover:scale-110',
              )}
            >
              <ArrowTriangle direction="right" className="fill-current" />
            </button>
          </div>
        )}

        <GridBar position="bottom" />
      </div>
    </section>
  );
}

export default CaseStudy;
