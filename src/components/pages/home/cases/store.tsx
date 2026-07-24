import { create } from 'zustand';

import { CasesInfo } from './data';

interface CasesStore {
  selectedInfo: number;
  prevSelectedInfo: number;
  isActive: boolean;
  blockchainMenuOpened: boolean;
  projectsMenuOpened: boolean;
  headerAnimationRef: gsap.core.Timeline | null;
  /** Set on swipe so the synthetic click that follows is ignored. */
  swiped: boolean;

  selectInfo: (val: number) => void;
  changeIsActive: (val: boolean) => void;
  setBlockchainMenuOpened: (val: boolean) => void;
  setProjectsMenuOpened: (val: boolean) => void;
  setHeaderAnimationRef: (val: gsap.core.Timeline) => void;
  setSwiped: (val: boolean) => void;
}

export const useCasesStore = create<CasesStore>((set, get) => ({
  selectedInfo: 0,
  prevSelectedInfo: CasesInfo.length - 1,
  isActive: true,
  blockchainMenuOpened: false,
  projectsMenuOpened: false,
  headerAnimationRef: null,
  swiped: false,

  selectInfo: (val) => {
    const intermediateResult = val % CasesInfo.length;
    const res =
      intermediateResult < 0 ? CasesInfo.length - 1 : intermediateResult;

    const prev = get().selectedInfo;

    return set({
      selectedInfo: res,
      prevSelectedInfo: prev,
    });
  },
  changeIsActive: (val) => set({ isActive: val }),
  setBlockchainMenuOpened: (val) => set({ blockchainMenuOpened: val }),
  setProjectsMenuOpened: (val) => set({ projectsMenuOpened: val }),
  setHeaderAnimationRef: (val) => set({ headerAnimationRef: val }),
  setSwiped: (val) => set({ swiped: val }),
}));
