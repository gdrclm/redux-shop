import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGoods, fetchGoodsTotalCount } from "./asyncActions";
import { Goods, GoodsSliceState, Status } from "./types";

const initialState: GoodsSliceState = {
  items: [],
  status: Status.LOADING,
  totalCount: 0,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Goods[]>) {
      state.items = action.payload;
    },
    getTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(fetchGoodsTotalCount.fulfilled, (state, action) => {
      state.totalCount = action.payload;
    });
  },
});

export const { setItems, getTotalCount } = goodsSlice.actions;

export default goodsSlice.reducer;
