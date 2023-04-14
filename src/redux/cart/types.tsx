export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  count: number;
  description: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
