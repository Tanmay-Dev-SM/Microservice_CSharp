import { create } from "zustand";

type State = {
  pageNumber: number;
  pageSize: number;
  pageCount: number;
  searchTerm: string;
  searchValue: string;
  orderBy: string;
  filterBy: string;
};

type Actions = {
  setParams: (params: Partial<State>) => void;
  reset: () => void;
  setSearchValue: (value: string) => void;
};

const intitalState: State = {
  pageNumber: 1,
  pageSize: 12,
  pageCount: 1,
  searchTerm: "",
  searchValue: "",
  orderBy: "make",
  filterBy: "live",
};

export const useParamsStore = create<State & Actions>()((set) => ({
  ...intitalState,
  setParams: (newParams: Partial<State>) => {
    set((state) => {
      if (newParams.pageNumber) {
        return { ...state, pageNumber: newParams.pageNumber };
      } else {
        return { ...state, ...newParams, pageNumber: 1 };
      }
    });
  },
  reset: () => set(intitalState),

  setSearchValue: (value: string) => {
    set({ searchValue: value });
  },
}));
