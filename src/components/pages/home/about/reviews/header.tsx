import { ReviewScore } from '~/components/common';
import { Arrow, Clutch } from '~/components/svg';
import { Button } from '~/components/ui';
import { LINKS } from '~/constants';
import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

interface HeaderProps extends BaseComponentProps {
  reviewCount: number;
}

export function Header({ className, reviewCount }: HeaderProps) {
  return (
    <header
      className={cn(
        'flex flex-row items-center justify-between px-5 py-[20px] md:py-[40px] 2xl:px-[40px] 2xl:py-[60px]',
        className,
      )}
    >
      <div className="flex flex-col gap-[10px] text-base uppercase leading-none sm:text-xl lg:flex-row lg:items-center lg:gap-5">
        <h2>RedDuck Reviews</h2>
        <div className="flex flex-col gap-2 md:flex-row md:items-end">
          <ReviewScore score={5} />
          <p className="text-sm">{reviewCount} reviews</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-[10px] max-lg:mt-auto sm:max-md:-ml-12 md:max-lg:-ml-12 lg:-ml-12 lg:flex-row lg:items-center lg:gap-5">
        <span className="text-sm uppercase max-sm:hidden">Powered by</span>
        <div className="flex flex-row items-center gap-[10px] sm:gap-5">
          <Clutch fill="white" className="h-[30px] max-sm:h-[20px]" />
          <Button
            variant={'link'}
            size={'link'}
            className="min-h-[56px] border-white bg-black hover:rotate-45"
            asChild
          >
            <a
              href={LINKS.Clutch}
              target="_blank"
              rel="noreferrer"
              aria-label="View reviews on Clutch"
            >
              <Arrow fill="white" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
