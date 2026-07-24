import { Square } from 'lucide-react';

import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

export function TextWithDot({ children, className }: BaseComponentProps) {
  return (
    <div className={cn('space-y-5 p-5 lg:p-10', className)}>
      <Square fill="inherit" stroke="inherit" size={10} />
      <div className="3xl:text-xl text-base leading-tight text-black xl:text-lg">
        {children}
      </div>
    </div>
  );
}
