import type { ComponentProps } from 'react';

import { cn } from '~/utils';

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        '!border-concrete flex h-[59px] w-full border-b bg-transparent px-[10px] py-[15px] text-xl text-black',
        'outline-none transition-colors duration-100',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'placeholder:text-concrete',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
