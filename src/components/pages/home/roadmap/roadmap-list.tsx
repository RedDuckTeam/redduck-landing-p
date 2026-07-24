import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import { ROADMAP_DATA } from './roadmap-data';

import { SectionHeader, TextWithDot } from '~/components/common';
import { useBreakpoint, useResizeObserver } from '~/hooks';
import { cn, isDefined } from '~/utils';

const CHILD_HEIGHT_ADJUSTMENT = 0.75;

export function RoadmapList({
  className,
  selectedIndex,
  setSelectedIndex,
}: {
  className?: string;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) {
  const [elementHeight, setElementHeight] = useState<number>(0);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

  const listRef = useRef<HTMLDivElement>(null);
  const movingItem = useRef<HTMLDivElement>(null);

  const isLg = useBreakpoint('lg');

  useResizeObserver(listRef, () => {
    const listChildren = listRef.current?.children;

    if (!isDefined(listChildren) || listChildren.length === 0) {
      return;
    }

    const row = listChildren?.[selectedIndex * 2 + 1];
    const descriptionElement = row?.children?.[0] as HTMLElement | undefined;

    if (!isLg && isDefined(descriptionElement)) {
      const descriptionHeight = descriptionElement?.offsetHeight ?? 0;
      setDescriptionHeight(descriptionHeight);
    }

    const childHeight =
      (listChildren?.[0]?.scrollHeight ?? 0) + CHILD_HEIGHT_ADJUSTMENT;

    if (childHeight !== elementHeight) {
      setElementHeight(childHeight);
    }
  });

  const moveElement = useCallback(
    (childHeightForCalculation?: number) => {
      const movingElement = movingItem.current;

      const heightToUse = childHeightForCalculation ?? elementHeight;

      if (!isDefined(movingElement)) {
        return;
      }

      movingElement.style.top = `${selectedIndex * heightToUse + heightToUse / 2}px`;
    },
    [elementHeight, selectedIndex],
  );

  useEffect(() => {
    moveElement();
  }, [selectedIndex, moveElement]);

  const handleTabClick = (index: number) => {
    setSelectedIndex(index);

    if (!isLg || !isDefined(listRef.current)) {
      return;
    }

    // Only when the list top is scrolled above the viewport top.
    if (listRef.current.getBoundingClientRect().top < 0) {
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      listRef.current.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <SectionHeader className="text-black">
        _SOFTWARE DEVELOPMENT APPROACH
      </SectionHeader>

      <div className="flex flex-1 flex-row divide-x">
        <div
          ref={listRef}
          className="relative flex flex-1 flex-col divide-y overflow-hidden"
        >
          {ROADMAP_DATA.map((item, index) => (
            <Fragment key={index}>
              <button
                key={index + (item?.title ?? '')}
                className="flex min-h-[85px] flex-1 items-center px-[20px] 2xl:min-h-[110px]"
                onClick={() => handleTabClick(index)}
                onFocus={() => setSelectedIndex(index)}
              >
                <h3 className="text-xl uppercase text-black">
                  <span className="text-red">0{index + 1}.</span> {item?.title}
                </h3>
              </button>

              <div
                style={{
                  maxHeight: selectedIndex === index ? descriptionHeight : 0,
                }}
                className={cn(
                  'overflow-hidden transition-all duration-500 lg:hidden',
                  selectedIndex !== index && '-z-10 max-h-[0px] opacity-0',
                )}
              >
                <TextWithDot
                  className={cn(selectedIndex !== index && 'text-pink')}
                >
                  {ROADMAP_DATA[index]?.description}
                </TextWithDot>
              </div>
            </Fragment>
          ))}

          <div
            ref={movingItem}
            className={cn(
              'transition-all duration-500 xl:duration-200',
              'absolute right-0 -translate-y-1/2 !border-0',
              'bg-red size-[25px] translate-x-1/2 rotate-45',
            )}
          />
        </div>

        <TextWithDot className="flex-1 max-2xl:hidden">
          {ROADMAP_DATA[selectedIndex]?.description}
        </TextWithDot>
      </div>
    </div>
  );
}
