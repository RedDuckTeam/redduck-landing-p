import type { SVGProps } from 'react';

export function Duck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="70"
      height="28"
      viewBox="0 0 70 30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M70 7v7H49V28H7V14H0V7H14v7H42V0H56V7Z" />
    </svg>
  );
}
