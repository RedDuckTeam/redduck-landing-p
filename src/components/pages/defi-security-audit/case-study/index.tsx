import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { CASE_STUDIES, type CaseStudyItem } from './data';

import { GridBar } from '~/components/common';

function CaseFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(560);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    let ro: ResizeObserver | null = null;

    function syncHeight() {
      const doc = iframe?.contentDocument;
      if (!doc) return;
      const h = Math.max(
        doc.documentElement.scrollHeight,
        doc.body?.scrollHeight ?? 0,
      );
      if (h > 0) setHeight(h);
    }

    function attachObserver() {
      const body = iframe?.contentDocument?.body;
      if (!body || !('ResizeObserver' in window)) return;
      ro?.disconnect();
      ro = new ResizeObserver(syncHeight);
      ro.observe(body);
    }

    function handleLoad() {
      syncHeight();
      attachObserver();
      iframe?.contentDocument?.fonts?.ready.then(syncHeight).catch(() => {});
    }

    iframe.addEventListener('load', handleLoad);
    if (iframe.contentDocument?.readyState === 'complete') handleLoad();
    window.addEventListener('resize', syncHeight);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', syncHeight);
      ro?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      style={{ height }}
      className="bg-gray w-full border-0"
    />
  );
}

function ExploreMoreLink({ href }: { href: string }) {
  const isMidas = href.includes('midas.app');
  return (
    <a
      href={href}
      target="_blank"
      rel={isMidas ? 'noopener noreferrer nofollow' : 'noopener noreferrer'}
      {...(isMidas ? { 'data-nosnippet': true } : {})}
      className="ibm-plex-mono inline-flex items-center gap-3 text-sm uppercase transition-transform hover:scale-[1.02] md:text-base 2xl:text-2xl"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-black text-white 2xl:size-12">
        <ArrowUpRight className="size-5 2xl:size-6" />
      </span>
      Explore more
    </a>
  );
}

function CaseContent({ item }: { item: CaseStudyItem }) {
  return (
    <div className="flex min-h-[500px] flex-col gap-6 p-5 md:p-8 2xl:gap-8 2xl:p-[40px]">
      <h3 className="ibm-plex-mono text-[20px] font-semibold uppercase leading-[140%] md:text-[24px] 2xl:text-[32px]">
        {item.title}
      </h3>

      <div className="space-y-2 text-sm leading-[140%] md:text-base 2xl:text-xl">
        {item.subhead && (
          <p className="ibm-plex-mono text-base font-bold uppercase 2xl:text-2xl">
            {item.subhead}
          </p>
        )}
        {item.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="space-y-1">
        <h4 className="ibm-plex-mono text-base font-bold uppercase 2xl:text-2xl">
          RESULT:
        </h4>
        {item.result.length > 1 ? (
          <ul className="space-y-2 text-sm leading-[140%] md:text-base 2xl:text-xl">
            {item.result.map((r) => (
              <li key={r} className="flex items-baseline gap-3">
                <span
                  aria-hidden
                  className="block size-[6px] shrink-0 translate-y-[-1px] bg-current"
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm leading-[140%] md:text-base 2xl:text-xl">
            {item.result[0]}
          </p>
        )}
      </div>

      {item.link && (
        <div className="mt-auto pt-4">
          <ExploreMoreLink href={item.link} />
        </div>
      )}
    </div>
  );
}

function CaseRow({
  item,
  reversed,
}: {
  item: CaseStudyItem;
  reversed?: boolean;
}) {
  const media = (
    <div className="flex h-full items-center justify-center">
      <img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        className="h-auto w-full"
      />
    </div>
  );

  const content = item.embedSrc ? (
    <div className="flex min-h-[500px] flex-col">
      <CaseFrame src={item.embedSrc} title={`${item.title} case study`} />
      {item.link && (
        <div className="p-5 md:p-8 2xl:p-[40px]">
          <ExploreMoreLink href={item.link} />
        </div>
      )}
    </div>
  ) : (
    <CaseContent item={item} />
  );

  return (
    <div className="border-dark-gray grid grid-cols-1 border-x lg:grid-cols-2">
      {reversed ? (
        <>
          <div className="border-dark-gray order-2 border-b lg:order-1 lg:border-b-0 lg:border-r">
            {content}
          </div>
          <div className="order-1 lg:order-2">{media}</div>
        </>
      ) : (
        <>
          <div className="border-dark-gray border-b lg:border-b-0">{media}</div>
          <div className="border-dark-gray lg:border-l">{content}</div>
        </>
      )}
    </div>
  );
}

export function CaseStudy() {
  if (CASE_STUDIES.length === 0) return null;

  return (
    <section className="bg-gray text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <div className="mx-5 2xl:mx-[60px]">
          <GridBar position="top" columns={1} withPadding={false} />

          <header className="border-dark-gray flex h-[100px] items-center justify-between gap-4 border-x border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
              _CASE STUDY
            </h2>
          </header>

          {CASE_STUDIES.map((item, i) => (
            <div key={item.title}>
              <CaseRow item={item} reversed={i % 2 === 1} />
              {i < CASE_STUDIES.length - 1 && (
                <GridBar position="middle" columns={1} withPadding={false} />
              )}
            </div>
          ))}

          <GridBar position="bottom" columns={1} withPadding={false} />
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
