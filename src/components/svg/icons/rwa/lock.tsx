import type { SVGProps } from 'react';

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 12V11H18V5H17V3H16V2H14V1H10V2H8V3H7V5H6V11H3V12H2V22H3V23H21V22H22V12H21ZM20 13V21H4V13H20ZM9 5V4H10V3H14V4H15V5H16V11H8V5H9Z"
        fill="currentColor"
      />
    </svg>
  );
}
