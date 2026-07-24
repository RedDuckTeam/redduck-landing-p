import { ArrowUpRight } from 'lucide-react';

import { CASE_STUDIES, type CaseStudyItem } from './data';

import { GridBar } from '~/components/common';
import { cn } from '~/utils';

function ExploreMoreLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ibm-plex-mono inline-flex items-center gap-3 text-sm uppercase transition-transform hover:scale-[1.02] md:text-base 2xl:text-2xl"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-black text-white 2xl:size-12">
        <ArrowUpRight className="size-5 2xl:size-6" />
      </span>
      Explore more
    </a>
  );
}

function CaseStudyRow({
  item,
  reversed,
  isLast,
}: {
  item: CaseStudyItem;
  reversed: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        'border-dark-gray grid grid-cols-1 lg:grid-cols-2',
        !isLast && 'border-b',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center',
          reversed ? 'lg:order-2' : 'border-dark-gray lg:border-r',
        )}
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-auto w-full"
        />
      </div>

      <div
        className={cn(
          'border-dark-gray flex flex-col gap-6 border-t p-5 md:p-8 lg:border-t-0 2xl:gap-8 2xl:p-[60px]',
          reversed ? 'lg:order-1 lg:border-r' : '',
        )}
      >
        <h3 className="ibm-plex-mono text-[20px] font-semibold uppercase leading-[140%] md:text-[24px] 2xl:text-[32px]">
          {item.title}
        </h3>

        <p className="text-sm leading-[140%] md:text-base lg:text-[20px]">
          {item.description}
        </p>

        {item.link && (
          <div className="mt-auto pt-4">
            <ExploreMoreLink href={item.link} />
          </div>
        )}
      </div>
    </div>
  );
}

export function CaseStudy() {
  return (
    <section className="bg-gray text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-b">
        <GridBar position="top" />

        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _CASE STUDIES
          </h2>
        </header>

        {CASE_STUDIES.map((item, idx) => (
          <CaseStudyRow
            key={item.title}
            item={item}
            reversed={idx % 2 === 1}
            isLast={idx === CASE_STUDIES.length - 1}
          />
        ))}

        <GridBar position="bottom" columns={1} />
      </div>
    </section>
  );
}

export default CaseStudy;
