import { useEffect, useRef, useState } from 'react';

import { ShortArrow } from '~/components/svg/short-arrow';
import { cn } from '~/utils';

interface FaqItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  isLast?: boolean;
  onToggle: () => void;
}

export function FaqItem({
  index,
  question,
  answer,
  isOpen,
  isLast,
  onToggle,
}: FaqItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>('auto');

  const openMaxHeight = height === 'auto' ? 'none' : `${height}px`;
  const maxHeight = isOpen ? openMaxHeight : '0px';

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer, isOpen]);

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'border-dark-gray in-h-[100px] flex w-full items-center gap-[20px] px-[20px] py-[45px] text-left text-black',
          !isLast && 'border-b',
        )}
      >
        <span className="ibm-plex-mono shrink-0 text-[20px] 2xl:text-[24px] 2xl:leading-[100%]">
          0{index + 1}.
        </span>
        <span className="ibm-plex-mono flex-1 text-[20px] 2xl:text-[24px] 2xl:leading-[100%]">
          {question}
        </span>
        <ShortArrow
          className={cn(
            'rotate-90 transition-transform duration-300',
            isOpen && '-rotate-90',
          )}
        />
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen
            ? cn('border-dark-gray opacity-100', !isLast && 'border-b')
            : 'max-h-0 opacity-0',
        )}
        style={{ maxHeight }}
      >
        <div
          ref={contentRef}
          className={cn(
            'border-dark-gray p-[20px] text-[16px] text-black 2xl:text-[20px] 2xl:leading-[140%]',
            !isLast && 'border-b',
          )}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
