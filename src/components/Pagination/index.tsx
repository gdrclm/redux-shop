import { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { Goods } from "../../redux/items/types";
import { PAGE_LIMIT } from "../../constants";
import { useAppSelector } from "../../redux/store";

type Props = {
  items: Goods[];
  onChangePage(e: number): void;
  currentPage: number;
};

export const Pagination: FC<Props> = ({ currentPage, onChangePage, items }) => {
  const totalCount = useAppSelector((state) => state.goods.totalCount);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="< "
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={totalCount / PAGE_LIMIT}
      forcePage={currentPage - 1}
    />
  );
};
export default Pagination;
