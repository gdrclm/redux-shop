import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "цене",
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.pageCount = 1;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.pageCount = Number(action.payload.pageCount);
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.pageCount = 1;
        state.categoryId = 0;
        state.sort = {
          name: "цене",
          sortProperty: SortPropertyEnum.PRICE_DESC,
        };
      }
    },
  },
});

export const {
  setCategoryId,
  setSearchValue,
  setSort,
  setPageCount,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
