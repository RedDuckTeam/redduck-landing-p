import { cn } from '~/utils';

type GridBarPosition = 'top' | 'bottom' | 'middle' | 'none';

interface GridBarProps {
  /** Controls horizontal border: top adds border-b, bottom adds border-t, middle adds border-y, none adds no border. */
  position?: GridBarPosition;
  /** Border color variant. 'dark' = border-dark-gray (light bg), 'concrete' = border-concrete (dark bg). */
  variant?: 'dark' | 'concrete';
  /** Number of inner column dividers: 1 or 2. Default is 2. */
  columns?: 1 | 2;
  /** Whether to include horizontal padding (px-5 / 2xl:px-[60px]). Default true. */
  withPadding?: boolean;
}

const POSITION_CLASS: Record<GridBarPosition, string> = {
  top: 'border-b',
  bottom: 'border-t',
  middle: 'border-y',
  none: '',
};

export function GridBar({
  position = 'top',
  variant = 'dark',
  columns = 2,
  withPadding = true,
}: GridBarProps) {
  const borderColor =
    variant === 'dark' ? 'border-dark-gray' : 'border-concrete';

  return (
    <div className={cn(POSITION_CLASS[position], borderColor)}>
      <div
        className={cn(
          'flex h-5 md:h-10 2xl:h-[60px]',
          withPadding && 'px-5 2xl:px-[60px]',
        )}
      >
        <div className={cn('flex-1 border-l border-r', borderColor)} />
        {columns === 2 && (
          <div className={cn('flex-1 border-r', borderColor)} />
        )}
      </div>
    </div>
  );
}
