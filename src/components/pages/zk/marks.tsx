import type { ReactNode } from 'react';

import { cn } from '~/utils';

interface CornersProps {
  className?: string;
  inset?: string;
}

export function Corners({ className, inset = 'inset-0' }: CornersProps) {
  const leg = cn('border-concrete absolute size-[18px]', className);
  return (
    <span aria-hidden className={cn('pointer-events-none absolute', inset)}>
      <span className={cn(leg, 'left-0 top-0 border-l border-t')} />
      <span className={cn(leg, 'right-0 top-0 border-r border-t')} />
      <span className={cn(leg, 'bottom-0 left-0 border-b border-l')} />
      <span className={cn(leg, 'bottom-0 right-0 border-b border-r')} />
    </span>
  );
}

interface CornerBoxProps {
  children?: ReactNode;
  className?: string;
  cornerClassName?: string;
  inset?: string;
}

export function CornerBox({
  children,
  className,
  cornerClassName,
  inset,
}: CornerBoxProps) {
  return (
    <div className={cn('relative', className)}>
      <Corners className={cornerClassName} inset={inset} />
      {children}
    </div>
  );
}

export function RedTriangle({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'border-r-red pointer-events-none absolute right-0 hidden size-0 border-y-[16px] border-r-[18px] border-y-transparent lg:block',
        className,
      )}
    />
  );
}
