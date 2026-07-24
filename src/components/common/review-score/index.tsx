import type { StarProps } from '~/components/ui';
import { Star } from '~/components/ui';
import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

interface ReviewScoreProps
  extends Omit<StarProps, 'value'>,
    BaseComponentProps<{ score: number; valueClassName?: string }> {}

const MIN_SCORE = 1;
const MAX_SCORE = 5;

export function ReviewScore({
  score,
  className,
  valueClassName,
  ...props
}: ReviewScoreProps) {
  const value = Math.max(MIN_SCORE, Math.min(score, MAX_SCORE));

  return (
    <div className={cn('flex items-center gap-[10px]', className)}>
      <span
        className={cn(
          'text-[16px] text-inherit lg:text-[20px] 2xl:text-[24px]',
          valueClassName,
        )}
      >
        {value.toFixed(1)}
      </span>

      <div className="flex items-center gap-[5px]">
        {Array(Math.ceil(value))
          .fill(null)
          .map((_, idx) => (
            <Star
              key={idx}
              value={value >= idx + 1 ? 'full' : 'half'}
              {...props}
            />
          ))}
      </div>
    </div>
  );
}
