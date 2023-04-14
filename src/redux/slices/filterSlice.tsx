import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  value: number;
}

const initialState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "цене",
    sortProperty: "price",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload;
        state.pageCount = Number(action.payload.pageCount);
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.pageCount = 1;
        state.categoryId = 0;
        state.sort = {
          name: "цене",
          sortProperty: "price",
        };
      }
    },
  },
});

export const { setCategoryId, setSort, setPageCount, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
