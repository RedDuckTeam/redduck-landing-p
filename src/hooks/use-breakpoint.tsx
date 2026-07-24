import { useState, useEffect } from 'react';

import config from '~/../tailwind.config.mjs';

const screens = config.theme.extend.screens;
type BreakpointKey = keyof typeof screens;

export const useBreakpoint = (breakpointKey: BreakpointKey) => {
  const width = screens ? screens[breakpointKey] : '0px';

  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    try {
      const mql = window.matchMedia(`(min-width: ${width})`);

      const setFromQuery = ({ matches }: { matches: boolean }) => {
        setIsBreakpoint(matches);
      };

      mql.addEventListener('change', setFromQuery);
      setFromQuery(mql);

      return () => {
        mql.removeEventListener('change', setFromQuery);
      };
    } catch {
      return;
    }
  }, [width]);

  return isBreakpoint;
};
