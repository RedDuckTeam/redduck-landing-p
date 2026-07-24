import type { SVGProps } from 'react';

export function ShortArrow({ fill, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill={fill ?? 'black'}
      {...props}
    >
      <g fill="inherit">
        <path d="M12 7.857h3v2.857h-3V7.857zm0 0H9V5h3v2.857zm0 14.286h3v-2.857h-3v2.857zm0 0H9V25h3v-2.857zM15 16.429v2.857h3V16.43h-3zM18 16.429h3v-2.857h-3v2.857zM18 13.571v-2.857h-3v2.857h3z" />
      </g>
    </svg>
  );
}
