import { TECH_DATA } from './tech-data';

import { Technology as TechnologySection } from '~/components/common';

export function Technology() {
  return <TechnologySection data={TECH_DATA} columns={5} />;
}

export default Technology;
