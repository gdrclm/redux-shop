import { FC } from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type Props = {
  onChangePage(e: any): void;
  currentPage: any;
};

export const Pagination: FC<Props> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="< "
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={17}
      forcePage={currentPage - 1}
    />
  );
};
export default Pagination;
