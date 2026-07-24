import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

interface InfoBlockProps extends BaseComponentProps {
  topNumber: number;
  topSymbol: string;
  bottom: string;
}

export function InfoBlock({
  topNumber,
  topSymbol,
  bottom,
  className,
}: InfoBlockProps) {
  return (
    <div
      className={cn(
        'flex h-[190px] flex-1 flex-col items-center justify-center border text-center',
        'space-y-[10px] md:space-y-5',
        className,
      )}
    >
      <p className="text-red text-[30px] leading-tight 2xl:text-[45px]">
        <span>{topNumber}</span>
        {topSymbol}
      </p>
      <p className="text-[16px] md:text-[20px] 2xl:text-[24px]">{bottom}</p>
    </div>
  );
}
