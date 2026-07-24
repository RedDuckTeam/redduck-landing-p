import { Link } from '@tanstack/react-router';

import { cn } from '~/utils';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  mutedClassName?: string;
};

export function Breadcrumb({
  items,
  className,
  mutedClassName,
}: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        'border-dark-gray hidden items-center gap-[20px] border-y md:flex',
        'px-5 2xl:px-[60px]',
        'py-[40px]',
        'text-lg',
        className,
      )}
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-[20px]">
          {index > 0 && (
            <span
              className={cn(
                'block size-[10px] bg-current',
                index < items.length - 1 && mutedClassName,
              )}
            />
          )}
          {item.href ? (
            <Link
              to={item.href}
              className={cn(
                'text-concrete transition-colors hover:text-inherit',
                mutedClassName,
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn(index < items.length - 1 && mutedClassName)}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
