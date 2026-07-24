import type { SVGProps } from 'react';

export function TopRatedBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 1.5l3.09 3.09L19.5 4.5l-.09 4.41L22.5 12l-3.09 3.09.09 4.41-4.41-.09L12 22.5l-3.09-3.09-4.41.09.09-4.41L1.5 12l3.09-3.09L4.5 4.5l4.41.09L12 1.5z"
        fill="#3C78D8"
      />
      <path
        d="M10.5 15.75l-3-3 1.06-1.06L10.5 13.63l4.94-4.94 1.06 1.06-6 6z"
        fill="white"
      />
    </svg>
  );
}
