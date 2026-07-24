import { SERVICES_DATA, type ServiceItem } from './services-data';

import { GridBar } from '~/components/common';
import { cn } from '~/utils';

function ServiceCell({
  service,
  className,
}: {
  service: ServiceItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'border-concrete flex flex-col gap-[20px] border-b border-r p-5 md:p-8 2xl:p-[40px]',
        className,
      )}
    >
      <div className="bg-red size-[10px] shrink-0" />
      <h3 className="ibm-plex-mono text-gray text-[20px] uppercase leading-[30px] 2xl:text-[24px]">
        {service.title}
      </h3>
      <p className="text-gray text-[18px] leading-[140%] 2xl:text-[20px]">
        {service.description}
      </p>
    </div>
  );
}

function Illustration({
  src,
  className,
  imgClassName,
}: {
  src: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        'border-concrete hidden items-center justify-center border-b border-r p-8 lg:flex lg:min-h-[480px] 2xl:min-h-[652px]',
        className,
      )}
    >
      <img
        className={cn('object-contain', imgClassName)}
        src={src}
        alt=""
        loading="lazy"
      />
    </div>
  );
}

export default function LaunchpadWhatWeBuild() {
  return (
    <section className="text-gray bg-black">
      <div className="border-concrete 5xl:border-x mx-auto w-full max-w-[1920px] border-t pb-5 md:pb-10 2xl:pb-[60px]">
        <GridBar position="top" variant="concrete" />

        <header className="border-concrete flex min-h-[100px] items-center border-b px-5 lg:px-[40px] 2xl:min-h-[150px] 2xl:px-[60px]">
          <h2 className="ibm-plex-mono text-gray text-[24px] font-medium uppercase leading-[60px] md:text-[30px] 2xl:text-[45px]">
            _What we build
          </h2>
        </header>

        <div className="px-5 lg:px-[40px] 2xl:px-[60px]">
          <div className="border-concrete border-x">
            <div className="grid grid-cols-1 xl:min-h-[460px] xl:grid-cols-[7fr_7fr_16fr] 2xl:min-h-[528px]">
              <ServiceCell service={SERVICES_DATA[0]} />
              <ServiceCell
                service={SERVICES_DATA[1]}
                className="xl:justify-end"
              />
              <ServiceCell service={SERVICES_DATA[2]} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <Illustration
                src="/images/launchpad/build-pc.webp"
                imgClassName="!max-h-[460px] !max-w-[420px]"
              />
              <div className="flex flex-col">
                <ServiceCell
                  service={SERVICES_DATA[3]}
                  className="flex-[37] justify-center"
                />
                <ServiceCell
                  service={SERVICES_DATA[4]}
                  className="flex-[63] justify-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col">
                <ServiceCell
                  service={SERVICES_DATA[5]}
                  className="flex-[63] justify-center"
                />
                <ServiceCell
                  service={SERVICES_DATA[6]}
                  className="flex-[37] justify-center"
                />
              </div>
              <Illustration
                src="/images/launchpad/build-coins.webp"
                imgClassName="!max-h-[316px] !max-w-[293px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
