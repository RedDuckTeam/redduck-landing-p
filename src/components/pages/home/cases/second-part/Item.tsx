import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

export function Item({
  label,
  children,
  className,
}: BaseComponentProps<{
  label: string;
}>) {
  return (
    <div
      className={cn(
        '3xl:gap-[40px] 3xl:px-[40px] flex flex-col justify-center gap-[20px] p-[20px]',
        className,
      )}
    >
      <p className="label text-[20px] uppercase 2xl:text-[24px]">{label}</p>
      {typeof children === 'string' ? (
        <p className="text-[16px] 2xl:text-[20px]">{children}</p>
      ) : (
        children
      )}
    </div>
  );
}
