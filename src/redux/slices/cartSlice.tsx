import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../cart/types";

export interface CartState {
  value: number;
}

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: any, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    removeItem(state: any, action: PayloadAction) {
      state.items.filter(state.items.filter((obj: any) => obj.id));
    },
    clearItems(state: any, action: PayloadAction) {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
