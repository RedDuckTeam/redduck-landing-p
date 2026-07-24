import { AccordionSection } from './accordion-section';
import { Item } from './Item';

import type { CasesInfo } from '../data';
import { useCasesStore } from '../store';

import { Arrow } from '~/components/svg';
import { cn, isDefined } from '~/utils';

type CaseItemDetailsProps = {
  entry: (typeof CasesInfo)[number];
  index: number;
  isSelected: boolean;
};

export function CaseItemDetails({
  entry,
  index,
  isSelected,
}: CaseItemDetailsProps) {
  const {
    blockchainMenuOpened,
    setBlockchainMenuOpened,
    projectsMenuOpened,
    setProjectsMenuOpened,
  } = useCasesStore();

  const hasBlockChainGroups = isDefined(entry.blockChainGroups);
  const hasNotableProjects = isDefined(entry.notableProjects);

  return (
    <div
      key={`${entry.name}_${index}_additional`}
      className={cn(
        'flex min-h-[350px] flex-col divide-y *:flex-1',
        !isSelected && 'hidden',
      )}
    >
      <Item label="About">{entry.about}</Item>

      {hasBlockChainGroups && (
        <AccordionSection
          label="blockchain group"
          isOpen={blockchainMenuOpened}
          setIsOpen={setBlockchainMenuOpened}
        >
          <div className="3xl:gap-[20px] flex flex-row flex-wrap gap-[10px]">
            {entry.blockChainGroups?.map((chain) => (
              <p
                key={chain.name}
                className="max-xs:px-[16px] max-xs:py-[10px] flex flex-row gap-1 border px-[24px] py-[12px] text-[16px] transition-all duration-100 hover:bg-white/10 2xl:text-[20px] [&>svg]:hover:rotate-45"
              >
                {chain.name}
                <img
                  src={chain.icon}
                  alt={`${chain.name} icon`}
                  loading="lazy"
                  className="size-[24px] 2xl:size-[30px]"
                />
              </p>
            ))}
          </div>
        </AccordionSection>
      )}

      {hasNotableProjects && (
        <AccordionSection
          label="Notable Projects"
          isOpen={projectsMenuOpened}
          setIsOpen={setProjectsMenuOpened}
        >
          <div className="3xl:gap-[20px] flex flex-row flex-wrap gap-[10px]">
            {entry.notableProjects?.map((project) => (
              <a
                key={project.link}
                href={project.link}
                target="_blank"
                rel={
                  project.link.includes('midas.app')
                    ? 'noreferrer nofollow'
                    : 'noreferrer'
                }
                {...(project.link.includes('midas.app')
                  ? { 'data-nosnippet': true }
                  : {})}
                className="max-xs:px-[16px] max-xs:py-[10px] flex flex-row items-center gap-1 border px-[24px] py-[12px] text-[16px] transition-all duration-100 hover:bg-white/10 2xl:text-[20px] [&>svg]:hover:rotate-45"
              >
                {project.name}{' '}
                <Arrow className="size-[24px] fill-white duration-100 2xl:size-[32px]" />
              </a>
            ))}
          </div>
        </AccordionSection>
      )}
    </div>
  );
}
