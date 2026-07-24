import type { SVGProps } from 'react';

export function DollarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 24V0H9V24M12 24V0H15V24M3 12V3H21V6H0V9H18V21H0V18H21V12"
        fill="currentColor"
      />
    </svg>
  );
}
