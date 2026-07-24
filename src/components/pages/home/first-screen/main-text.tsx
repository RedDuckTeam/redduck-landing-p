import { Squares } from '~/components/common';
import { useBreakpoint } from '~/hooks';
import { cn } from '~/utils';

export function MainText({ className }: { className?: string }) {
  const isLg = useBreakpoint('lg');
  const isSm = useBreakpoint('sm');

  let squareSize;

  if (isLg) {
    squareSize = 50;
  } else {
    squareSize = isSm ? 35 : 20;
  }

  return (
    <div
      className={cn(
        'relative col-span-full flex-1 overflow-hidden',
        'select-none border-b',
        className,
      )}
    >
      <Squares
        moveScale={0.5}
        scaleX={0.12}
        scaleY={0.12}
        speed={0.005}
        squareSize={squareSize}
        approximateSquareSize
        className="absolute"
      />
    </div>
  );
}
