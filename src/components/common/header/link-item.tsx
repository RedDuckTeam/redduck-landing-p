import { Link } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';

import { HeaderDropdownMenu } from './dropdown-menu';

import type { HeaderItem } from '~/constants';
import { cn, isDefined } from '~/utils';

export function LinkItem({
  headerItem,
  className,
  onClick,
}: {
  headerItem: HeaderItem;
  className?: string;
  onClick?: () => void;
}) {
  const sharedClassName = cn(
    'flex h-full items-center px-[30px] text-xl text-black',
    'transition-colors duration-200',
    className,
  );

  return (
    <Fragment>
      {isDefined(headerItem.href) && (
        <Link
          to={headerItem.href}
          className={cn('uppercase hover:bg-[#e0cdc6dd]', sharedClassName)}
          target={headerItem.href?.startsWith('http') ? '_blank' : undefined}
          onClick={onClick}
        >
          <p>{headerItem.name}</p>
        </Link>
      )}

      {isDefined(headerItem.items) && (
        <HeaderDropdownMenu
          headerItem={headerItem}
          align="end"
          className={cn(
            '!h-full uppercase hover:bg-[#e0cdc6dd] data-[state=open]:!bg-[#e0cdc6dd]',
            sharedClassName,
          )}
        />
      )}
    </Fragment>
  );
}
