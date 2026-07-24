import { Duck } from '~/components/svg';
import { cn } from '~/utils';

export function DuckInFrame({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative grid size-[160px] grid-cols-2 p-4',
        '*:aspect-square [&>div]:size-[18px]',
        className,
      )}
    >
      <div className="border-l border-t" />
      <div className="ml-auto border-r border-t" />
      <div className="mt-auto border-b border-l" />
      <div className="ml-auto mt-auto border-b border-r" />

      <Duck
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-[#F22C1A]"
        width={132}
        height={52}
      />
    </div>
  );
}
