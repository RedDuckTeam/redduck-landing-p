import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/utils';

const buttonVariants = cva(
  'uppercase font-mono inline-flex items-center justify-center flex text-[16px] md:text-[20px] 2xl:text-[20px] text-black h-full max-h-[50px] md:max-h-[56px] lg:max-h-[60px] hover:scale-[1.03] transition-all leading-[20px] md:leading-[25px] lg:leading-[30px]',
  {
    variants: {
      variant: {
        default: 'bg-red',
        link: 'rounded-full border border-black bg-gray justify-center',
      },
      size: {
        default: 'py-[15px] px-6',
        sm: 'py-1 px-3',
        md: 'py-2 px-4',
        link: 'h-[56px] w-[56px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
