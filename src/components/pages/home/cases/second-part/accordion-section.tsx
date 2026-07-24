import type { ReactNode } from 'react';

import { Item } from './Item';

import { ShortArrow } from '~/components/svg';
import { useBreakpoint } from '~/hooks';
import { cn } from '~/utils';

interface AccordionSectionProps {
  label: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
}

export function AccordionSection({
  label,
  isOpen,
  setIsOpen,
  children,
}: AccordionSectionProps) {
  const isMd = useBreakpoint('md');

  let className = '!max-h-none !border-t';

  if (!isMd) {
    className = isOpen ? 'second-visible' : 'second-not-visible';
  }

  return (
    <>
      <button
        className="flex max-h-[70px] min-h-[70px] items-center justify-between px-[20px] md:hidden"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-[20px] uppercase 2xl:text-[24px]">{label}</p>
        <ShortArrow
          className={cn(
            'fill-white transition-transform duration-500 ease-in-out',
            isOpen ? 'rotate-90' : '-rotate-90',
          )}
        />
      </button>

      <Item
        label={label}
        className={cn(
          'max-md:!min-h-0 max-md:overflow-hidden max-md:[&_.label]:hidden',
          className,
        )}
      >
        {children}
      </Item>
    </>
  );
}
