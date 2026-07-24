import { Squares } from '~/components/common/squares';
import { buttonVariants } from '~/components/ui/button';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

interface BookACallProps {
  title: string;
  buttonLabel: string;
}

export function BookACall({ title, buttonLabel }: BookACallProps) {
  return (
    <section className="bg-pink overflow-hidden">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-y">
        <div className="relative h-[200px] md:h-[240px] 2xl:h-[280px]">
          <div className="pointer-events-none absolute inset-0">
            <Squares
              moveScale={0.5}
              scaleX={0.06}
              scaleY={0.06}
              speed={0.005}
              squareSize={40}
              approximateSquareSize
              fadingColour="#e0cdc6"
            />
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-5 md:gap-8 2xl:gap-10">
            <h2
              className={cn(
                'ibm-plex-mono text-center font-medium uppercase text-black',
                'text-[24px] md:text-[32px] 2xl:text-[40px]',
              )}
            >
              {title}
            </h2>
            <button
              type="button"
              onClick={() => {
                trackCalendlyClick();
                openCalendlyPopup();
              }}
              className={buttonVariants({
                className: '!bg-black text-white',
              })}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookACall;
