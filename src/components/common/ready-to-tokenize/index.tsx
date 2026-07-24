import { DuckInFrame } from '~/components/common/duck-in-frame';
import { buttonVariants } from '~/components/ui';
import { openCalendlyPopup, trackCalendlyClick } from '~/utils';

interface ReadyToTokenizeProps {
  title?: string;
}

export function ReadyToTokenize({
  title = '_READY TO BUILD?',
}: ReadyToTokenizeProps = {}) {
  return (
    <section className="bg-black text-white">
      <div className="5xl:border-x mx-auto w-full max-w-[1920px]">
        <div className="border-concrete flex flex-col border-b lg:flex-row">
          <div className="border-concrete flex w-full flex-col border-b lg:w-1/2 lg:border-b-0 lg:border-r">
            <header className="border-concrete flex h-[100px] items-center border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
              <h2 className="ibm-plex-mono text-[24px] font-medium uppercase text-white md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
                {title}
              </h2>
            </header>

            <div className="flex flex-1 flex-col sm:flex-row">
              <div className="border-concrete flex items-center justify-center border-b sm:w-1/3 sm:border-b-0 sm:border-r">
                <DuckInFrame className="border-concrete !size-full" />
              </div>
              <div className="flex items-center p-5 sm:w-2/3 md:p-10">
                <h3 className="ibm-plex-mono text-[40px] font-medium uppercase leading-tight text-[#565653] md:text-[56px] 2xl:text-[80px] 2xl:leading-[104px]">
                  WHAT DA QUACK?
                </h3>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center p-5 md:p-10 lg:w-1/2 2xl:p-[60px]">
            <p className="ibm-plex-mono text-base uppercase md:text-lg 2xl:text-[24px] 2xl:leading-[30px]">
              TELL US ABOUT YOUR PROJECT — ASSET CLASS, TARGET MARKET, AND WHERE
              YOU ARE IN THE PROCESS. WE&apos;LL COME BACK WITH A RESPONSE IN
              LESS THAN 12 HOURS.
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
            GET PRICING
          </a>
          <button
            type="button"
            onClick={() => {
              trackCalendlyClick();
              openCalendlyPopup();
            }}
            className={buttonVariants({
              className: '!max-h-[60px] w-full text-center lg:w-[400px]',
            })}
          >
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReadyToTokenize;
