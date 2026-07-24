import { create } from 'zustand';

import { WhatBreaksInfo } from './data';

interface WhatBreaksStore {
  selectedInfo: number;
  prevSelectedInfo: number;
  timelineRef: gsap.core.Timeline | null;

  selectInfo: (val: number) => void;
  setSelectedInfo: (val: number) => void;
  setTimelineRef: (val: gsap.core.Timeline | null) => void;
}

export const useWhatBreaksStore = create<WhatBreaksStore>((set, get) => ({
  selectedInfo: 0,
  prevSelectedInfo: WhatBreaksInfo.length - 1,
  timelineRef: null,

  selectInfo: (val) => {
    const intermediateResult = val % WhatBreaksInfo.length;
    const res =
      intermediateResult < 0 ? WhatBreaksInfo.length - 1 : intermediateResult;

    const prev = get().selectedInfo;

    return set({
      selectedInfo: res,
      prevSelectedInfo: prev,
    });
  },
  setSelectedInfo: (val) =>
    set((state) => ({
      selectedInfo: val,
      prevSelectedInfo: state.selectedInfo,
    })),
  setTimelineRef: (val) => set({ timelineRef: val }),
}));
