import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce(
    (totalPrice, currentValue) =>
      currentValue.price * currentValue.count + totalPrice,
    0
  );
};
