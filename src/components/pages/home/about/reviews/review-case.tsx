import type { ReviewCase } from './reviews-data';

import { BaseTooltip, ReviewScore } from '~/components/common';
import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

export function ReviewCase({
  author,
  rating,
  text,
  link,
  className,
}: BaseComponentProps<ReviewCase>) {
  return (
    <div
      className={cn(
        'flex flex-col items-start space-y-5 border bg-black p-5 md:p-[30px] xl:p-10',
        'size-[260px] md:h-[325px] md:w-[280px] lg:h-[285px] lg:w-[340px] 2xl:size-[365px]',
        className,
      )}
      // href={link}
      aria-label={`Review by ${author}`}
    >
      <ReviewScore score={rating} />

      <div className="flex flex-1 flex-col justify-between gap-1 text-[16px] 2xl:text-[20px]">
        <BaseTooltip
          as="span"
          content={text}
          className="line-clamp-4"
          contentClassName={cn(
            'w-[300px] text-justify text-[14px] md:text-[16px]',
          )}
        >
          &quot;{text}&quot;
        </BaseTooltip>

        <footer className="mt-auto space-y-1">
          <cite className="block not-italic">{author}</cite>

          <a href={link} className="text-gray inline-block underline">
            Source
          </a>
        </footer>
      </div>
    </div>
  );
}
