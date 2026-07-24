import type { ReactNode } from 'react';
import { useState } from 'react';

import { FaqItem } from './faq-item';

import { GridBar } from '../grid-bar';

export type FaqEntry = {
  question: string;
  answer: string;
};

type FaqImage = {
  src: string;
  alt: string;
};

type FaqProps = {
  items: FaqEntry[];
  image?: FaqImage;
  media?: ReactNode;
  title?: string;
};

export function Faq({
  items,
  image,
  media,
  title = '_FREQUENTLY ASKED QUESTIONS',
}: FaqProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set());

  const handleToggle = (index: number) => {
    setOpenIndices((prev) => (prev.has(index) ? new Set() : new Set([index])));
  };

  return (
    <section className="bg-pink">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" />
        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase text-black md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            {title}
          </h2>
        </header>
        <div className="grid grid-cols-1 px-5 pb-[60px] lg:grid-cols-2 2xl:px-[60px]">
          <div
            className={`border-dark-gray flex flex-col border-b border-l max-lg:hidden lg:border-r ${
              media ? 'min-h-[900px]' : ''
            }`}
          >
            {media
              ? media
              : image && (
                  <div className="relative flex flex-1 items-center justify-center overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                )}
          </div>

          <div className="border-dark-gray border-b border-r max-lg:border-l">
            {items.map((item, index) => (
              <FaqItem
                key={item.question}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndices.has(index)}
                isLast={index === items.length - 1}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
