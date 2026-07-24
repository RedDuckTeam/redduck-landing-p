import { BENTO_ITEMS, type BentoItem } from './data';

import { Corners, RedTriangle } from '../marks';

import { cn } from '~/utils';

function BentoCell({
  item,
  className,
}: {
  item: BentoItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'border-dark-gray relative flex flex-col p-5 md:p-8 2xl:p-[40px]',
        className,
      )}
    >
      {item.corners && <Corners className="border-red" inset="inset-5" />}

      <div
        className={cn(
          'relative flex items-center gap-5 px-5 2xl:px-[40px]',
          item.titleVariant && 'py-[10px] 2xl:py-5',
          item.titleVariant === 'border' && 'border-dark-gray border',
        )}
      >
        <span className="ibm-plex-mono text-[40px] font-medium leading-[100%] md:text-[56px] 2xl:text-[80px]">
          {item.number}
        </span>
        <h3 className="ibm-plex-mono text-[18px] font-medium uppercase leading-[130%] 2xl:text-[24px]">
          {item.title}
        </h3>
        <RedTriangle className="top-1/2 -translate-y-1/2" />
      </div>

      <p className="mt-5 text-[16px] leading-[140%] 2xl:mt-8 2xl:text-[20px]">
        {item.description}
      </p>
    </div>
  );
}

function Illustration({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        'hidden items-center justify-center lg:flex lg:min-h-[360px] 2xl:min-h-[420px]',
        className,
      )}
    >
      <img src={src} alt="" loading="lazy" className="size-full object-cover" />
    </div>
  );
}

export default function ZkWhatWeBuild() {
  return (
    <section className="bg-gray text-black">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px] border-t">
        <header className="border-dark-gray flex h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-[24px] font-medium uppercase md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
            _WHAT WE BUILD
          </h2>
        </header>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-dark-gray border-x">
            <BentoCell item={BENTO_ITEMS[0]} className="border-b" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <BentoCell
                item={BENTO_ITEMS[1]}
                className="border-b lg:border-r"
              />
              <Illustration
                src="/images/zk/build-smart-contract.webp"
                className="border-b"
              />
            </div>

            <BentoCell item={BENTO_ITEMS[2]} className="border-b" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <Illustration
                src="/images/zk/build-cubes.webp"
                className="border-b lg:border-r"
              />
              <BentoCell item={BENTO_ITEMS[3]} className="border-b" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <BentoCell
                item={BENTO_ITEMS[4]}
                className="border-b lg:border-r"
              />
              <BentoCell item={BENTO_ITEMS[5]} className="border-b" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
