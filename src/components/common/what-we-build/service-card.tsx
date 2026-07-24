import type { SVGProps } from 'react';

import { cn } from '~/utils';

export interface ServiceCardData {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardData) {
  return (
    <div
      className={cn('border-concrete border p-5 md:p-8 2xl:p-10', className)}
    >
      <Icon className="mb-6 size-[80px]" />
      <h3 className="mb-5 text-2xl uppercase leading-[30px] text-white">
        {title}
      </h3>
      <p className="text-gray text-[20px] leading-[140%]">{description}</p>
    </div>
  );
}
