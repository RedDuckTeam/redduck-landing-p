import { Squares } from '~/components/common/squares';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

type CtaBannerProps = {
  title: string;
  label: string;
  variant: 'red' | 'black';
} & ({ calendly: true; href?: never } | { calendly?: false; href: string });

export function CtaBanner({
  title,
  label,
  href,
  variant,
  calendly,
}: CtaBannerProps) {
  const isRed = variant === 'red';

  const buttonClass = cn(
    'ibm-plex-mono w-full px-[40px] py-[12px] text-center text-sm uppercase transition-transform hover:scale-[1.03] md:w-auto md:text-base 2xl:px-[60px] 2xl:py-[15px] 2xl:text-xl',
    isRed ? 'bg-black text-white' : 'bg-red text-black',
  );

  return (
    <section className={isRed ? 'bg-red' : 'bg-black'}>
      <div className="5xl:border-x mx-auto w-full max-w-[1920px]">
        <div className="relative flex h-[200px] items-center justify-center md:h-[280px] 2xl:h-[364px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Squares
              moveScale={0.5}
              scaleX={0.06}
              scaleY={0.06}
              speed={0.005}
              squareSize={40}
              approximateSquareSize
              theme={isRed ? 'red' : 'dark'}
              fadingColour={isRed ? '#c73d2d' : '#2a1a1a'}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 px-5 md:gap-8 2xl:gap-10">
            <h2
              className={cn(
                'ibm-plex-mono text-center font-medium uppercase text-white',
                'text-[22px] leading-tight md:text-[32px] 2xl:text-[45px] 2xl:leading-[60px]',
              )}
            >
              {title}
            </h2>
            {calendly ? (
              <button
                type="button"
                onClick={() => {
                  trackCalendlyClick();
                  openCalendlyPopup();
                }}
                className={buttonClass}
              >
                {label}
              </button>
            ) : (
              <a href={href} className={buttonClass}>
                {label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
