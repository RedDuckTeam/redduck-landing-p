import { ShortArrow } from '~/components/svg';
import { cn } from '~/utils';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export function NavigationButton({
  direction,
  onClick,
  disabled,
}: NavigationButtonProps) {
  const isLeft = direction === 'left';
  const ariaLabel = `${isLeft ? 'Previous' : 'Next'} reviews`;

  return (
    <button
      className={cn(
        '[@media(hover:hover)]:hover:bg-white/10',
        'active:bg-white/10',
        'focus:outline-none',
        'focus-visible:ring-2 focus-visible:ring-white/50',
        'select-none',
        '[-webkit-tap-highlight-color:transparent]',
        isLeft ? 'max-sm:pl-1 sm:p-4' : 'max-sm:pr-1 sm:p-4',
        disabled && 'cursor-not-allowed opacity-50',
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <ShortArrow
        fill="white"
        className={cn('max-sm:size-[24px]', isLeft && 'rotate-180')}
      />
    </button>
  );
}
