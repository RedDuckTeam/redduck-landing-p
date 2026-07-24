import { WHITELABEL_LAUNCHPAD_URL } from '../constants';

import { DuckInFrame } from '~/components/common/duck-in-frame';
import { buttonVariants } from '~/components/ui/button';

const whitelabelHref = WHITELABEL_LAUNCHPAD_URL || '#getInTouch';
const isExternal = Boolean(WHITELABEL_LAUNCHPAD_URL);

export function FinalCta() {
  return (
    <section className="bg-black text-white">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <div className="border-concrete grid grid-cols-1 border-b lg:grid-cols-2">
          <div className="border-concrete flex flex-col border-b lg:border-b-0 lg:border-r">
            <header className="border-concrete flex min-h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:min-h-[150px] 2xl:px-[60px]">
              <h2 className="ibm-plex-mono text-[24px] font-medium uppercase text-white md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
                _READY TO BUILD?
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
              Most launch failures aren&apos;t bad tokenomics — they&apos;re
              infrastructure decisions made too fast under pressure. We help you
              get the launch architecture right before TGE.
            </p>
          </div>
        </div>

        <div className="border-concrete flex flex-col items-center justify-center gap-[40px] border-b p-5 md:p-10 lg:flex-row 2xl:p-[60px]">
          <a
            href="#getInTouch"
            className={buttonVariants({
              className: '!max-h-[60px] w-full text-center lg:w-[400px]',
            })}
          >
            BOOK A FREE LAUNCH CALL
          </a>
          <a
            href={whitelabelHref}
            {...(isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className={buttonVariants({
              className:
                '!bg-concrete !max-h-[60px] w-full text-center text-white lg:w-[400px]',
            })}
          >
            SEE OUR WHITELABEL LAUNCHPAD
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
