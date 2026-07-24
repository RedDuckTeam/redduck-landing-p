import { TechCard } from './tech-card';

export interface TechItem {
  logo: string;
  name: string;
  description: string;
}

// Full literal class names so Tailwind keeps them at build time.
const XL_COLUMNS = {
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
} as const;

interface TechnologyProps {
  data: TechItem[];
  title?: string;
  /** Number of cards per row on xl+ screens. The cards are designed to fill a single row. */
  columns?: keyof typeof XL_COLUMNS;
  /**
   * Adds a top border to the header block. Use when the preceding section
   * does not close with its own border.
   */
  withTopBorder?: boolean;
}

export function Technology({
  data,
  title = '_TECH STACK',
  columns = 4,
  withTopBorder = false,
}: TechnologyProps) {
  return (
    <section className="bg-gray">
      <div className="border-dark-gray 5xl:border-x mx-auto w-full max-w-[1920px]">
        <div
          className={`border-dark-gray grid grid-cols-1 border-b lg:grid-cols-2 ${
            withTopBorder ? 'border-t' : ''
          }`}
        >
          <header className="border-dark-gray flex h-[100px] items-center border-b px-5 md:h-[100px] lg:border-b-0 2xl:h-[150px] 2xl:px-[60px]">
            <h2 className="ibm-plex-mono text-[24px] font-medium uppercase text-black md:text-[30px] 2xl:text-[45px] 2xl:leading-[60px]">
              {title}
            </h2>
          </header>
        </div>

        <div
          className={`border-dark-gray mx-5 grid grid-cols-1 border-r md:grid-cols-2 2xl:mx-[60px] ${XL_COLUMNS[columns]}`}
        >
          {data.map((tech) => (
            <TechCard
              key={tech.name}
              logo={tech.logo}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>

        <div className="border-dark-gray">
          <div className="flex h-5 px-5 md:h-10 2xl:h-[60px] 2xl:px-[60px]">
            <div className="border-dark-gray flex-1 border-l border-r" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
