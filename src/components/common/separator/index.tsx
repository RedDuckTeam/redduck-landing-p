import { cn } from '~/utils';

export const Separator = ({ className }: { className?: string }) => {
  return (
    <div className={cn('separator hideX hideC', className)}>
      <div className="left" />
      <div className="right" />
    </div>
  );
};
