export type Goods = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  types: number[];
  expirationDate: string;
  description: string;
  kKal: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type SearchGoodsParams = {
  sortBy: string;
  category: string;
  search: string;
  pageCount: string;
};

export interface GoodsSliceState {
  items: Goods[];
  status: Status;
  totalCount: number;
}
