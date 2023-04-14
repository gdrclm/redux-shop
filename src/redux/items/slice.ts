import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGoods } from "./asyncActions";
import { Goods, GoodsSliceState, Status } from "./types";

const initialState: GoodsSliceState = {
  items: [],
  status: Status.LOADING,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Goods[]>) {
      state.items = action.payload;
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
  },
});

export const { setItems } = goodsSlice.actions;

export default goodsSlice.reducer;
