import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

export function SectionHeader({ children, className }: BaseComponentProps) {
  return (
    <header
      className={cn(
        'border-dark-gray flex items-center justify-start border-b font-mono font-medium uppercase',
        'px-[20px] text-[24px] md:text-[30px] 2xl:text-[45px]',
        'h-[100px] md:h-[120px] 2xl:h-[150px]',
        className,
      )}
    >
      <h2>{children}</h2>
    </header>
  );
}
