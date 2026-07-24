import type { ReactNode } from 'react';

import { DuckInFrame } from '~/components/common/duck-in-frame';
import { buttonVariants } from '~/components/ui';
import { LINKS } from '~/constants/links';

export interface ReadyToBuildProps {
  /** Copy shown in the right-hand column. */
  blurb: ReactNode;
  /** Label for the primary "book a call" button. */
  ctaLabel: string;
  ctaHref?: string;
  title?: string;
}

export function ReadyToBuild({
  blurb,
  ctaLabel,
  ctaHref = '#getInTouch',
  title = '_READY TO BUILD?',
}: ReadyToBuildProps) {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-2">
          <div className="border-concrete flex flex-col border-b lg:border-b-0 lg:border-r">
            <header className="border-concrete flex min-h-[120px] items-center border-b px-5 lg:px-[40px] 2xl:min-h-[150px] 2xl:px-[60px]">
              <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
                {title}
              </h2>
            </header>

            <div className="grid flex-1 grid-cols-[auto_1fr]">
              <div className="border-concrete flex items-center justify-center border-r p-8 2xl:p-[40px]">
                <DuckInFrame className="size-[160px] 2xl:size-[220px]" />
              </div>
              <div className="flex items-center px-5 py-10 2xl:px-[40px]">
                <p className="ibm-plex-mono text-concrete text-[40px] font-medium uppercase leading-[1.05] md:text-[56px] 2xl:text-[72px]">
                  What da quack?
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-5 py-10 lg:px-[40px] 2xl:px-[60px]">
            <p className="ibm-plex-mono text-[16px] uppercase leading-[1.4] text-white 2xl:text-[20px]">
              {blurb}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[40px] px-5 py-[40px] md:py-[60px] lg:flex-row">
          <a
            href={ctaHref}
            className={buttonVariants({
              className: '!max-h-[60px] w-full text-center lg:w-[460px]',
            })}
          >
            {ctaLabel}
          </a>
          <a
            href={LINKS.Github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className:
                '!bg-concrete !max-h-[60px] w-full text-center text-white lg:w-[460px]',
            })}
          >
            See Our Work on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReadyToBuild;
