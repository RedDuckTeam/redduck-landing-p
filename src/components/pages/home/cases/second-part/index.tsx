import { CaseItemDetails } from './case-item-details';

import { CasesInfo } from '../data';
import { useCasesStore } from '../store';

export function SecondPart() {
  const { selectedInfo } = useCasesStore();

  return (
    <div className="flex flex-1 flex-col *:flex-1 lg:flex-row">
      {CasesInfo.map((entry, index) => (
        <CaseItemDetails
          key={`${entry.name}_${index}_details`}
          entry={entry}
          index={index}
          isSelected={selectedInfo === index}
        />
      ))}
    </div>
  );
}
