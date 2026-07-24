import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { GridBar } from '~/components/common';
import { buttonVariants } from '~/components/ui';
import { cn, openCalendlyPopup, trackCalendlyClick } from '~/utils';

const TAGS = ['Founded 2024', 'USA', 'Non-custodial wallet'];

function MidasCaseFrame() {
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
      src="/midas-case.html"
      title="RWA Vault case study"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      style={{ height }}
      className="bg-gray w-full border-0"
    />
  );
}

export function CaseStudy() {
  return (
    <section className="bg-gray text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <GridBar position="top" />

        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 md:h-[100px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _CASE STUDY & SUCCESS STORY
          </h2>
        </header>

        <div className="border-dark-gray grid grid-cols-1 border-b lg:grid-cols-2 2xl:px-[60px]">
          <div className="border-dark-gray flex items-center justify-center lg:border-l lg:border-r">
            <div className="w-full">
              <img
                src="/images/rwa/midas.webp"
                alt="RWA Vault platform"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="border-dark-gray flex flex-col border-r">
            <div className="border-dark-gray mt-[40px] flex flex-wrap items-center gap-2 border-t px-5 pt-5 md:px-8 md:pt-8 2xl:px-[40px] 2xl:pt-[40px]">
              {TAGS.map((tag, i) => (
                <div key={tag} className={cn(i === 0 && 'md:flex-1')}>
                  <span className="border-dark-gray whitespace-nowrap border px-2 py-1 text-[14px] lg:text-[16px] xl:px-4 xl:py-2 xl:text-[18px]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-dark-gray mb-[40px] flex flex-1 flex-col gap-6 border-b pt-5 md:pt-8 2xl:pt-[30px]">
              <MidasCaseFrame />

              <div className="px-5 pb-5 md:px-8 md:pb-8 2xl:px-[40px] 2xl:pb-[40px]">
                <a
                  href="https://midas.app/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  data-nosnippet
                  className="inline-flex w-fit items-center gap-4 transition-transform hover:scale-[1.03]"
                >
                  <span className="flex size-[56px] shrink-0 items-center justify-center rounded-full bg-black">
                    <ArrowUpRight className="size-8 text-white" />
                  </span>
                  <span className="ibm-plex-mono text-[20px] uppercase md:text-[24px]">
                    EXPLORE MORE
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-dark-gray mx-5 border-b border-l border-r px-5 py-5 md:mx-5 md:flex-row md:py-8 2xl:mx-[60px] 2xl:py-[40px]">
          <p className="mb-5 text-sm md:text-base 2xl:text-xl">
            We provide the most suitable development services for your project
          </p>
          <button
            type="button"
            onClick={() => {
              trackCalendlyClick();
              openCalendlyPopup();
            }}
            className={buttonVariants({
              className: 'shrink-0 px-10 max-md:w-full',
            })}
          >
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
