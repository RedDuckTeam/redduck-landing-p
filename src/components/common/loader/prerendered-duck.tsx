import { useEffect, useRef, useState } from 'react';

import { useResizeObserver } from '~/hooks';
import { cn, isDefined } from '~/utils';

export function PrerenderedDuck({
  isActive,
  duckScale,
}: {
  isActive: boolean;
  duckScale: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [size, setSize] = useState([0, 0]);

  useResizeObserver(canvasRef, () => {
    if (!isDefined(canvasRef.current)) {
      return;
    }

    setSize([canvasRef.current.offsetWidth, canvasRef.current.offsetHeight]);
  });

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');

    if (!isDefined(canvasRef.current) || !isDefined(context)) {
      return;
    }

    const width = size[0] === 0 ? canvasRef.current.offsetWidth : size[0];
    const height = size[1] === 0 ? canvasRef.current.offsetHeight : size[1];

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    context.fillStyle = '#FFFFFF';
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 2;

    const offsetX = width / 2 - (70 * duckScale) / 2;
    const offsetY = height / 2 - (28 * duckScale) / 2;

    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0 * duckScale + offsetX, 7 * duckScale + offsetY);
    context.lineTo(14 * duckScale + offsetX, 7 * duckScale + offsetY);
    context.lineTo(14 * duckScale + offsetX, 14 * duckScale + offsetY);
    context.lineTo(42 * duckScale + offsetX, 14 * duckScale + offsetY);
    context.lineTo(42 * duckScale + offsetX, 0 * duckScale + offsetY);
    context.lineTo(56 * duckScale + offsetX, 0 * duckScale + offsetY);
    context.lineTo(56 * duckScale + offsetX, 7 * duckScale + offsetY);
    context.lineTo(70 * duckScale + offsetX, 7 * duckScale + offsetY);
    context.lineTo(70 * duckScale + offsetX, 14 * duckScale + offsetY);
    context.lineTo(49 * duckScale + offsetX, 14 * duckScale + offsetY);
    context.lineTo(49 * duckScale + offsetX, 28 * duckScale + offsetY);
    context.lineTo(7 * duckScale + offsetX, 28 * duckScale + offsetY);
    context.lineTo(7 * duckScale + offsetX, 14 * duckScale + offsetY);
    context.lineTo(0 * duckScale + offsetX, 14 * duckScale + offsetY);
    context.closePath();

    context.stroke();

    return () => {
      context.clearRect(0, 0, width, height);
    };
  }, [duckScale, size]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'pointer-events-none fixed z-50 block h-screen !w-screen !max-w-none !p-0',
        'animate-duckFadeIn',
        !isActive && 'hidden',
      )}
    />
  );
}
