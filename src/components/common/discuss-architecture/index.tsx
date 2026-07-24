import { buttonVariants } from '~/components/ui/button';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

interface DiscussArchitectureProps {
  title: string;
  theme?: 'dark' | 'light';
  images?: {
    left: string;
    right: string;
  };
}

export function DiscussArchitecture({
  title,
  theme = 'dark',
  images,
}: DiscussArchitectureProps) {
  const isDark = theme === 'dark';

  return (
    <section className={cn('overflow-hidden', isDark ? 'bg-red' : 'bg-gray')}>
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <div className="relative h-[200px] md:h-[280px] 2xl:h-[360px]">
          {images?.left && (
            <img
              src={images.left}
              alt=""
              loading="lazy"
              aria-hidden
              className="absolute left-0 top-0 h-[80%] max-h-full w-auto shrink-0 object-contain max-md:hidden"
            />
          )}

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-5 md:gap-8 2xl:gap-10">
            <h2
              className={cn(
                'ibm-plex-mono text-center font-medium uppercase',
                'text-[18px] md:text-[28px] 2xl:text-[45px]',
                isDark ? 'text-white' : 'text-black',
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
                className: cn(
                  '!max-h-[60px] w-full text-center text-white lg:w-[400px]',
                  isDark && '!bg-black',
                ),
              })}
            >
              Schedule a Consultation
            </button>
          </div>

          {images?.right && (
            <img
              src={images.right}
              alt=""
              loading="lazy"
              aria-hidden
              className="absolute bottom-0 right-0 h-[80%] max-h-full w-auto shrink-0 object-contain max-md:hidden"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default DiscussArchitecture;
