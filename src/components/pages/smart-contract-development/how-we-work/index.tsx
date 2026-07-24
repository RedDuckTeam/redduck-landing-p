import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import { HOW_WE_WORK_DATA } from './how-we-work-data';

import { GridBar, LogoOnABlock, TextWithDot } from '~/components/common';
import { useBreakpoint, useResizeObserver } from '~/hooks';
import { cn, isDefined } from '~/utils';

const CHILD_HEIGHT_ADJUSTMENT = 0.75;

export function HowWeWork() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elementHeight, setElementHeight] = useState<number>(0);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

  const listRef = useRef<HTMLDivElement>(null);
  const movingItem = useRef<HTMLDivElement>(null);

  const isLg = useBreakpoint('lg');

  useResizeObserver(listRef, () => {
    const listChildren = listRef.current?.children;
    if (!isDefined(listChildren) || !listChildren.length) return;

    const row = listChildren?.[selectedIndex * 2 + 1];
    const descriptionElement = row?.children?.[0] as HTMLElement | undefined;

    if (!isLg && isDefined(descriptionElement)) {
      setDescriptionHeight(descriptionElement?.offsetHeight ?? 0);
    }

    const childHeight =
      (listChildren?.[0]?.scrollHeight ?? 0) + CHILD_HEIGHT_ADJUSTMENT;
    if (childHeight !== elementHeight) setElementHeight(childHeight);
  });

  const moveElement = useCallback(() => {
    const movingElement = movingItem.current;
    if (!isDefined(movingElement)) return;
    movingElement.style.top = `${selectedIndex * elementHeight + elementHeight / 2}px`;
  }, [elementHeight, selectedIndex]);

  useEffect(() => {
    moveElement();
  }, [selectedIndex, moveElement]);

  return (
    <section id="howWeWork" className="bg-pink">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" columns={1} />
        <div className="border-dark-gray grid grid-cols-1 lg:grid-cols-2">
          <header className="border-dark-gray flex min-h-[100px] items-center border-b px-5 2xl:min-h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase leading-[60px] text-black md:text-[30px] 2xl:text-[45px]">
              _HOW DO WE WORK?
            </h2>
          </header>
          <TextWithDot className="border-dark-gray flex flex-col justify-center border-b !p-5 lg:border-l 2xl:!px-[40px] 2xl:!py-[60px] [&>div]:!text-[20px] [&>div]:!leading-[140%]">
            The Blockchain development process with the RedDuck — the blockchain
            solutions company that is worth it, always follows these steps.
          </TextWithDot>
        </div>

        <div className="border-dark-gray flex flex-1 flex-row border-b 2xl:px-[60px]">
          <LogoOnABlock variant="pc" className="max-lg:hidden lg:border-l" />

          <div className="border-dark-gray flex w-full flex-col lg:w-1/3 lg:border-l lg:border-r">
            <div className="flex flex-1 flex-row">
              <div
                ref={listRef}
                className="divide-dark-gray relative flex flex-1 flex-col divide-y overflow-hidden"
              >
                {HOW_WE_WORK_DATA.map((item, index) => (
                  <Fragment key={index}>
                    <button
                      className="flex min-h-[85px] flex-1 items-center px-[20px] 2xl:min-h-[100px]"
                      onClick={() => {
                        setSelectedIndex(index);
                        if (!isLg) {
                          const reduce =
                            typeof window !== 'undefined' &&
                            window.matchMedia(
                              '(prefers-reduced-motion: reduce)',
                            ).matches;
                          document.getElementById('howWeWork')?.scrollIntoView({
                            behavior: reduce ? 'auto' : 'smooth',
                            block: 'start',
                          });
                        }
                      }}
                      onFocus={() => setSelectedIndex(index)}
                    >
                      <h3 className="flex items-center gap-5 text-left text-[20px] uppercase text-black 2xl:text-2xl">
                        <span className="text-red shrink-0">0{index + 1}.</span>
                        <span>{item?.title}</span>
                      </h3>
                    </button>

                    <div
                      style={{
                        maxHeight:
                          selectedIndex === index ? descriptionHeight : 0,
                      }}
                      className={cn(
                        'overflow-hidden transition-all duration-500 lg:hidden',
                        selectedIndex !== index &&
                          '-z-10 max-h-[0px] opacity-0',
                      )}
                    >
                      <TextWithDot
                        className={cn(
                          '[&>div]:!text-[20px]',
                          selectedIndex !== index && 'text-pink',
                        )}
                      >
                        {HOW_WE_WORK_DATA[index]?.description}
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
            </div>
          </div>

          <TextWithDot className="border-dark-gray order-2 max-h-full flex-1 !p-5 max-lg:hidden lg:border-r 2xl:!px-[40px] 2xl:!py-[60px] [&>div]:!text-[20px] [&>div]:!leading-[140%]">
            {HOW_WE_WORK_DATA[selectedIndex]?.description}
          </TextWithDot>
        </div>

        <GridBar position="none" />
      </div>
    </section>
  );
}

export default HowWeWork;
