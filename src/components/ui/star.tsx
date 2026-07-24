import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideProps } from 'lucide-react';
import { StarHalf, Star as StarIcon } from 'lucide-react';

import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

enum StarValueVariants {
  Full = 'full',
  Half = 'half',
}

const starVariants = cva('size-[20px] lg:size-[24px] 2xl:size-[28px]', {
  variants: {
    variant: {
      red: 'text-red fill-red',
      green: 'text-green fill-green',
    },
  },
  defaultVariants: {
    variant: 'red',
  },
});

export interface StarProps
  extends VariantProps<typeof starVariants>,
    LucideProps,
    BaseComponentProps {
  value?: `${StarValueVariants}`;
}

const Star = ({ className, variant, value = 'full', ...props }: StarProps) => {
  const Comp = value === 'full' ? StarIcon : StarHalf;

  return (
    <Comp className={cn(starVariants({ variant, className }))} {...props} />
  );
};

Star.displayName = 'Star';

export { Star, starVariants };
