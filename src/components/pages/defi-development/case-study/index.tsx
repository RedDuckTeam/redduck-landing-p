import { Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

import { CASE_STUDIES } from './data';

import { GridBar } from '~/components/common';
import { useSwipe } from '~/hooks';
import { cn } from '~/utils';

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
          className="border-dark-gray grid touch-pan-y grid-cols-1 border-b lg:grid-cols-2 2xl:px-[60px]"
        >
          <div className="border-dark-gray flex items-center justify-center lg:border-l lg:border-r">
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
              'border-dark-gray flex flex-col border-r pt-5 md:pt-8 lg:min-h-[1000px]',
              'motion-reduce:animate-none max-lg:animate-none',
              direction === 'next'
                ? 'animate-caseSlideNext'
                : 'animate-caseSlidePrev',
            )}
          >
            {current.link && (
              <div className="border-dark-gray border-t p-5 md:p-8 2xl:p-[40px] 2xl:pb-0">
                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ibm-plex-mono inline-flex w-fit items-center gap-2 bg-black px-6 py-3 text-sm text-white transition-transform [@media(hover:hover)]:hover:scale-[1.03]"
                >
                  <LinkIcon className="size-4" />
                  Link
                </a>
              </div>
            )}

            <div className="border-dark-gray flex flex-1 flex-col gap-6 pt-5 md:pt-8 2xl:pt-[30px]">
              <h3 className="ibm-plex-mono px-5 text-[20px] font-semibold uppercase leading-[140%] md:px-8 md:text-[24px] 2xl:px-[40px] 2xl:text-[32px]">
                {current.title}
              </h3>

              <div className="space-y-1 px-5 text-sm leading-[140%] md:px-8 md:text-base 2xl:px-[40px] 2xl:text-xl">
                {current.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="space-y-1 px-5 md:px-8 2xl:px-[40px]">
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

              <div className="space-y-3 px-5 md:px-8 2xl:px-[40px]">
                <h4 className="ibm-plex-mono text-base font-bold uppercase 2xl:text-2xl">
                  RESULT:
                </h4>
                <p className="text-sm leading-[140%] md:text-base 2xl:text-xl">
                  {current.result}
                </p>
              </div>

              <div className="border-dark-gray border-b border-t px-5 py-2 md:px-8 2xl:px-[40px]">
                <p className="text-center text-sm italic md:text-base 2xl:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <p className="pr-4 text-right text-sm md:text-base">
                — {current.quoteAuthor}
              </p>
            </div>
          </div>
        </div>

        {hasMultiple && (
          <div className="border-dark-gray flex items-center justify-center gap-5 border-b px-5 py-3 md:py-4">
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
      </div>
    </section>
  );
}

export default CaseStudy;
