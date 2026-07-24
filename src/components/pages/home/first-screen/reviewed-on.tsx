import type { ReactNode } from 'react';

import { Clutch, Upwork } from '~/components/svg';
import { Arrow } from '~/components/svg/arrow';
import { Button } from '~/components/ui';
import type { BaseComponentProps, ReviewedOnVariants } from '~/types';
import { cn } from '~/utils';

interface ReviewedOnProps extends BaseComponentProps {
  scoreLabel: ReactNode;
  reviewedOn: `${ReviewedOnVariants}`;
  linkTo: string;
}

const platformLogoMap: Record<ReviewedOnVariants, string | ReactNode> = {
  Clutch: <Clutch className="mb-[5px] h-[35px] min-h-[25px]" fill="black" />,
  UpWork: <Upwork className="h-[45px] min-h-[25px]" />,
};

export function ReviewedOn({
  className,
  scoreLabel,
  reviewedOn,
  linkTo,
}: ReviewedOnProps) {
  return (
    <div className={cn('flex w-full items-end justify-between', className)}>
      <div className="flex h-full flex-col items-start justify-end gap-2 md:gap-[10px] xl:gap-5">
        {scoreLabel}

        <span className="text-[12px] uppercase leading-[26px] text-black md:text-[16px] lg:text-[14px] 2xl:text-[20px]">
          Reviewed on
        </span>

        {platformLogoMap[reviewedOn]}
      </div>

      <Button
        variant={'link'}
        size={'link'}
        className="-ml-4 min-h-[56px] hover:rotate-45"
        asChild
      >
        <a
          href={linkTo}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${reviewedOn} profile`}
        >
          <Arrow />
        </a>
      </Button>
    </div>
  );
}
