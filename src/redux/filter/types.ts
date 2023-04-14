export enum SortPropertyEnum {
  KKAL_DESC = "kKal",
  KKAL_ASC = "-kKal",
  NAME_DESC = "name",
  NAME_ASC = "-name",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  EXPIRATIONDATE_DESC = "expirationDate",
  EXPIRATIONDATE_ASC = "-expirationDate",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: Sort;
}
