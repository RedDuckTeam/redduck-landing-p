import { Link } from '@tanstack/react-router';
import type { HTMLProps } from 'react';
import { useLayoutEffect, useState, type ComponentProps } from 'react';

import { Arrow } from '~/components/svg';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui';
import type { HeaderItem } from '~/constants';
import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

export interface HeaderDropdownMenuProps extends BaseComponentProps {
  headerItem: HeaderItem;
  align: ComponentProps<typeof PopoverContent>['align'];
  contentClassName?: string;
}

function SubItem({
  children,
  className,
  role = 'menuitem',
  ...props
}: HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      role={role}
      className={cn(
        'item flex h-[80px] w-full px-[20px] uppercase',
        'flex-row items-center justify-between text-[20px]',
        '[&_*]:transition-all [&_*]:duration-100',
        'hover:bg-[#e0cdc6dd] data-[active=true]:bg-[#e0cdc6dd] [&_svg]:hover:rotate-45',
        'group',
        className,
      )}
    >
      {children}
    </p>
  );
}

export function HeaderDropdownMenu({
  headerItem,
  className,
  children,
  align,
  contentClassName,
}: HeaderDropdownMenuProps) {
  const [firstSelection, setFirstSelection] = useState(0);
  const [secondSelection, setSecondSelection] = useState(0);
  const [popoverWidth, setPopoverWidth] = useState<string>('420px');

  const isComplex = headerItem.isComplex === true;

  useLayoutEffect(() => {
    if (isComplex) {
      const width = `calc(100vw - 120px - ${window.innerWidth - document.body.clientWidth}px)`;
      setPopoverWidth(width);
    } else {
      setPopoverWidth('420px');
    }
  }, [isComplex]);

  // After the hooks — keep hook order unconditional.
  if (!Array.isArray(headerItem.items)) {
    return null;
  }

  const firstItems = headerItem.items[firstSelection]?.items;
  const secondItems = firstItems?.[secondSelection]?.items;

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          'relative overflow-hidden',
          '[&>.clue]:!translate-y-[125%] [&>.clue]:hover:!translate-y-[80%] [&>.clue]:data-[state=open]:!translate-y-1/2',
          className,
        )}
      >
        {headerItem.name}
        <span
          className={cn(
            'clue block transition-all duration-100',
            '!bg-red absolute size-[20px] rotate-45',
            'bottom-0 left-1/2 -translate-x-1/2',
          )}
        />
      </PopoverTrigger>
      <PopoverContent
        style={{
          width: popoverWidth,
          height: isComplex ? '562px' : 'auto',
        }}
        className={cn(
          contentClassName,
          '[&_*]:border-dark-gray border-dark-gray p-0',
          isComplex ? 'grid grid-cols-[1fr_1fr_1.5fr]' : 'flex flex-col',
          '[&_*]:transition-all [&_*]:duration-100',
        )}
        sideOffset={0}
        align={align}
        avoidCollisions
        collisionPadding={60}
      >
        {children}
        {!isComplex &&
          headerItem.items
            .filter((item) => 'href' in item)
            .map((item, index) => (
              <Link
                key={(item.href ?? '') + index}
                to={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
              >
                <SubItem>
                  <span>{item.name}</span>

                  <Arrow />
                </SubItem>
              </Link>
            ))}

        {isComplex && (
          <>
            <div className="bg-black">
              {headerItem.items.map((item, index) => (
                <SubItem
                  key={`${index}`}
                  data-active={index === firstSelection}
                  className={cn(
                    'text-white',
                    'hover:!bg-red data-[active=true]:!bg-red hover:text-black data-[active=true]:text-black',
                    'relative overflow-hidden',
                    '[&>.clue]:!translate-x-[125%] [&>.clue]:data-[active=true]:!translate-x-1/2',
                  )}
                  onMouseEnter={() => {
                    setFirstSelection(index);
                    setSecondSelection(0);
                  }}
                >
                  0{index + 1}. {item.name}
                  <span
                    className={cn(
                      'clue block',
                      '!bg-gray absolute size-[20px] rotate-45',
                      'bottom-1/2 right-0 -translate-x-0 translate-y-1/2',
                    )}
                  />
                </SubItem>
              ))}
            </div>

            <div className="overflow-y-auto border-x">
              {firstItems?.map((item, index) => (
                <SubItem
                  key={`${index}_${firstSelection}_second`}
                  data-active={index === secondSelection}
                  className={cn(
                    firstItems.length > 7 && 'border-r',
                    firstItems.length >= 7 && 'last:border-b-0',
                    'justify-start gap-[20px] border-b',
                    '[&_svg]:data-[active=true]:!rotate-45 [&_svg]:data-[active=true]:!fill-black',
                  )}
                  onMouseEnter={() => setSecondSelection(index)}
                >
                  <span className="block size-[10px] !bg-black" /> {item.name}{' '}
                  <Arrow className="fill-transparent group-hover:fill-black" />
                </SubItem>
              ))}
            </div>

            <div className="max-h-full !overflow-y-auto">
              {secondItems?.map((item, index) => (
                <Link
                  key={`${index}_${firstSelection}_${secondSelection}_third`}
                  to={item.href}
                  className={cn(secondItems.length >= 7 && '*:last:border-b-0')}
                >
                  <SubItem
                    className={cn(
                      'border-b',
                      secondItems.length > 7 && 'border-r',
                    )}
                  >
                    <span>{item.name}</span>
                    <Arrow />
                  </SubItem>
                </Link>
              ))}
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
