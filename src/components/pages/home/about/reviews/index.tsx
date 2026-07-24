import { useCallback, useEffect, useRef, useState } from 'react';

import { Header } from './header';
import { NavigationButton } from './navigation-buttons';
import { Pagination } from './pagination';
import { ReviewCase } from './review-case';
import { ReviewsData } from './reviews-data';

import { useResizeObserver } from '~/hooks';
import type { BaseComponentProps } from '~/types';
import { cn, isDefined } from '~/utils';

const GAP = 20; // px

const getReviewsPage = (page: number, onePageAmount: number) => {
  return ReviewsData.slice(
    page * onePageAmount,
    page * onePageAmount + onePageAmount,
  );
};

export function Reviews({
  className,
  hideHeader,
  hideCarousel,
}: BaseComponentProps<{ hideHeader?: boolean; hideCarousel?: boolean }>) {
  const reviewsRef = useRef<HTMLDivElement>(null);

  const [onePageAmount, setOnePageAmount] = useState<number>(1);
  const [selectedPage, setSelectedPage] = useState<number>(0);

  const maxPages = Math.ceil(ReviewsData.length / onePageAmount);
  const isFirstPage = selectedPage === 0;
  const isLastPage = selectedPage === maxPages - 1;

  const handleNavigation = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSelectedPage((prev) => (isFirstPage ? maxPages - 1 : prev - 1));
    } else if (direction === 'right') {
      setSelectedPage((prev) => (isLastPage ? 0 : prev + 1));
    }
  };

  const moveElements = useCallback(() => {
    const element = reviewsRef.current;
    const children = element?.children;

    if (!isDefined(element) || !isDefined(children)) {
      return;
    }

    const width = element.clientWidth;

    for (let i = 1; i < children.length; i++) {
      const subsection = children[i] as HTMLDivElement;

      subsection.style.left = `${
        width * (i - 1 - selectedPage) + (width - subsection.scrollWidth) / 2
      }px`;
    }
  }, [selectedPage]);

  useResizeObserver(reviewsRef, () => {
    const element = reviewsRef.current;
    const children = element?.childNodes;

    if (!isDefined(element) || !isDefined(children)) {
      return;
    }

    const width = element.clientWidth;
    const hiddenChildWidth = element.children[0]?.scrollWidth;

    if (!isDefined(hiddenChildWidth) || !isDefined(width)) {
      return;
    }

    const newOnePageAmount = Math.floor(width / (hiddenChildWidth + GAP));

    if (newOnePageAmount !== onePageAmount) {
      setOnePageAmount(Math.max(1, newOnePageAmount));
      setSelectedPage(0);
    }

    moveElements();
  });

  useEffect(() => {
    moveElements();
  }, [moveElements, selectedPage, onePageAmount]);

  return (
    <section
      className={cn('flex flex-col', className)}
      aria-label="Customer reviews"
    >
      {!hideHeader && <Header reviewCount={ReviewsData.length} />}

      {!hideCarousel && (
        <div className="flex flex-1 flex-row justify-between gap-5">
          <NavigationButton
            direction="left"
            onClick={() => handleNavigation('left')}
          />

          <div
            className={cn(
              'flex flex-1 flex-col justify-center overflow-x-hidden',
              'gap-5 py-5 2xl:gap-10 2xl:py-10',
            )}
          >
            <div
              ref={reviewsRef}
              className={cn(
                'flex flex-row justify-center',
                'relative overflow-x-hidden',
              )}
              style={{ gap: `${GAP}px` }}
              role="region"
              aria-live="polite"
              aria-label="Reviews carousel"
            >
              {/* Is needed to establish parent's height and easier calculations in the resize part */}
              <ReviewCase
                className="opacity-0"
                author=""
                link=""
                rating={0}
                text=""
              />

              {Array.from({ length: maxPages }).map((_, inx) => {
                return (
                  <div
                    style={{
                      gap: `${GAP}px`,
                    }}
                    key={inx}
                    className={cn(
                      'flex flex-row',
                      'absolute transition-all duration-200 ease-in-out',
                    )}
                  >
                    {getReviewsPage(inx, onePageAmount).map((review, idx) => (
                      <ReviewCase key={`${idx}-${review.link}`} {...review} />
                    ))}
                  </div>
                );
              })}
            </div>

            <Pagination
              currentPage={selectedPage}
              totalPages={maxPages}
              onPageChange={setSelectedPage}
            />
          </div>

          <NavigationButton
            direction="right"
            onClick={() => handleNavigation('right')}
          />
        </div>
      )}
    </section>
  );
}

export default Reviews;
