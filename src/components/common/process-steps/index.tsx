import { type ReactNode, useState } from 'react';

import { GridBar, TextWithDot } from '~/components/common';
import { cn } from '~/utils';

export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
}

export interface ProcessStepColor {
  bg: string;
  hex: string;
}

export interface ProcessStepsProps {
  heading: ReactNode;
  intro: ReactNode;
  footer?: ReactNode;
  items: ProcessStep[];
  colors?: Record<string, ProcessStepColor>;
  alwaysOpen?: string;
  sectionClassName?: string;
  contentClassName?: string;
  reverse?: boolean;
}

const DEFAULT_COLORS: Record<string, ProcessStepColor> = {
  '/01': { bg: 'bg-[#DE846E]', hex: '#DE846E' },
  '/02': { bg: 'bg-[#DE9D8D]', hex: '#DE9D8D' },
  '/03': { bg: 'bg-[#ECBDB2]', hex: '#ECBDB2' },
  '/04': { bg: 'bg-[#E9C6BA]', hex: '#E9C6BA' },
};

export function ProcessSteps({
  heading,
  intro,
  footer,
  items,
  colors = DEFAULT_COLORS,
  alwaysOpen = '/01',
  sectionClassName = 'bg-pink text-black',
  contentClassName,
  reverse = true,
}: ProcessStepsProps) {
  const [openSet, setOpenSet] = useState<Set<string>>(
    () => new Set([alwaysOpen]),
  );

  const toggle = (number: string) => {
    if (number === alwaysOpen) return;
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });
  };

  const displayItems = reverse ? [...items].reverse() : items;

  return (
    <section className={sectionClassName}>
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <GridBar position="top" />

        <div
          className={cn('px-5 lg:px-[40px] 2xl:px-[60px]', contentClassName)}
        >
          <div className="border-dark-gray border-x">
            <div className="border-dark-gray grid grid-cols-1 border-b lg:grid-cols-7">
              <header className="border-dark-gray flex min-h-[100px] items-center border-b px-5 lg:col-span-5 lg:border-b-0 lg:border-r 2xl:min-h-[150px] 2xl:px-[40px]">
                <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
                  {heading}
                </h2>
              </header>
              <TextWithDot className="flex flex-col justify-center !p-5 lg:col-span-2 2xl:!px-[40px] 2xl:!py-[30px] [&>div]:!text-base [&>div]:!leading-[140%]">
                <span className="lg:text-[18px]">{intro}</span>
              </TextWithDot>
            </div>

            <div>
              {displayItems.map((item) => {
                const isOpen =
                  item.number === alwaysOpen || openSet.has(item.number);
                const isAlwaysOpen = item.number === alwaysOpen;
                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => toggle(item.number)}
                    aria-expanded={isOpen}
                    disabled={isAlwaysOpen}
                    className={cn(
                      'border-dark-gray relative flex w-full border-b text-left',
                      isAlwaysOpen && 'cursor-default',
                    )}
                  >
                    <div
                      className={cn(
                        'border-dark-gray relative hidden shrink-0 border-r md:block md:w-[160px] lg:w-[200px] 2xl:w-[280px]',
                        colors[item.number]?.bg,
                      )}
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 100 20"
                        preserveAspectRatio="none"
                        className="absolute -top-2 left-0 h-[11px] w-10 overflow-visible md:-top-[10px] md:h-[13px] md:w-14 2xl:-top-3 2xl:h-[15px] 2xl:w-20"
                      >
                        <path
                          d="M 0 20 L 0 6 Q 0 0 6 0 L 76 0 Q 80 0 82 4 L 100 20 Z"
                          fill={colors[item.number]?.hex}
                        />
                        <path
                          d="M 0 20 L 0 6 Q 0 0 6 0 L 76 0 Q 80 0 82 4 L 100 20"
                          fill="none"
                          stroke="var(--dark-gray)"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ibm-plex-mono absolute left-5 top-5 text-[40px] font-medium leading-[100%] md:left-8 md:top-10 md:text-[60px] 2xl:left-14 2xl:top-12 2xl:text-[80px]">
                        {item.number}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center px-5 py-6 md:px-8 md:py-8 2xl:px-[40px] 2xl:py-[40px]">
                      <h3 className="ibm-plex-mono text-sm font-medium uppercase leading-[140%] md:text-base 2xl:text-[32px]">
                        {item.title}
                      </h3>
                      {item.description && (
                        <div
                          className={cn(
                            'grid transition-[grid-template-rows] duration-300 ease-in-out',
                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="ibm-plex-mono mt-3 text-sm leading-[140%] 2xl:mt-4 2xl:text-[20px]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {footer && (
          <TextWithDot className="!p-5 2xl:!p-[60px] [&>div]:!text-base [&>div]:!leading-[140%]">
            <span className="lg:text-[18px]">{footer}</span>
          </TextWithDot>
        )}

        <GridBar position="bottom" />
      </div>
    </section>
  );
}

export default ProcessSteps;
