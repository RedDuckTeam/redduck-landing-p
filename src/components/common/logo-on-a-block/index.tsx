import { useEffect, useLayoutEffect, useRef } from 'react';

import ConcreteTextureURL from '~/assets/images/textures/concrete.webp?url';
import { bgImg, cn, isDefined, toRange } from '~/utils';

type Variant = 'boom-box' | 'duck' | 'pc';

const VARIANT_IMAGES: Record<Variant, string> = {
  'boom-box': '/images/landing/boom-box.webp',
  duck: '/images/3d-duck.webp',
  pc: '/images/pc.webp',
};

const VARIANT_ALT: Record<Variant, string> = {
  'boom-box': 'BoomBox on a Block',
  duck: 'Duck on a Block',
  pc: 'PC on a Block',
};

const VARIANT_WIDTH_CLASS: Record<Variant, string> = {
  'boom-box': 'w-[550px]',
  duck: 'w-[381px]',
  pc: 'w-[333px]',
};

const LOGO_TOP_OFFSET = 40;

interface LogoOnABlockProps {
  variant?: Variant;
  className?: string;
}

export function LogoOnABlock({
  variant = 'boom-box',
  className,
}: LogoOnABlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wireRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!isDefined(container)) return;

    const lockHeight = () => {
      container.style.height = '';
      const naturalHeight = container.clientHeight;
      container.style.height = `${naturalHeight}px`;
    };

    lockHeight();
    window.addEventListener('resize', lockHeight);
    return () => window.removeEventListener('resize', lockHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isDefined(containerRef.current) ||
        !isDefined(logoRef.current) ||
        !isDefined(blockRef.current)
      ) {
        return;
      }

      const logoImg = logoRef.current;
      const block = blockRef.current;

      const blockRectInfo = block.getBoundingClientRect();
      const blockBottom = blockRectInfo.bottom;
      const screenTop = window.scrollY;

      const centerOfTheScreen = screenTop + window.innerHeight / 2;

      const maxHeight = Math.min(
        600 - LOGO_TOP_OFFSET,
        containerRef.current.clientHeight -
          logoImg.clientHeight -
          LOGO_TOP_OFFSET,
      );

      const resultingHeight = toRange(
        screenTop + blockBottom - centerOfTheScreen - logoImg.clientHeight / 2,
        100,
        maxHeight,
      );

      block.style.height = `${resultingHeight}px`;
      logoImg.style.bottom = `${resultingHeight}px`;

      if (isDefined(wireRef.current)) {
        const wireTop = containerRef.current.clientHeight - resultingHeight;
        wireRef.current.style.top = `${wireTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'bg-light-gray group relative flex flex-1 items-end justify-center overflow-hidden *:transition-all *:duration-500',
        className,
      )}
    >
      {variant === 'duck' && (
        <img
          src="/images/faq-bg.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {variant === 'boom-box' && (
        <img
          ref={wireRef}
          loading="lazy"
          src="/images/landing/wire.webp"
          alt="Wire"
          className="js-only absolute -translate-x-[250px] -translate-y-[24px]"
        />
      )}
      <img
        ref={logoRef}
        loading="lazy"
        src={VARIANT_IMAGES[variant]}
        alt={VARIANT_ALT[variant]}
        className={`absolute ${VARIANT_WIDTH_CLASS[variant]}`}
      />

      <div
        ref={blockRef}
        style={bgImg(ConcreteTextureURL)}
        className="relative z-10 !max-h-full w-[333px] bg-[101%,101%] bg-top bg-repeat-y"
      />
    </div>
  );
}
