import React, { FC } from "react";
import { useAppDispatch } from "../redux/store";
import GoodsItem from "../components/GoodsBlock";
import { Categories, Sort, Skeleton, Pagination } from "../components";

import { setPageCount, setCategoryId } from "../redux/filter/slice";
import { useSelector } from "react-redux";
import { selectGoodsData } from "../redux/items/selectors";
import { selectFilter } from "../redux/filter/selectors";
import { fetchGoods, fetchGoodsTotalCount } from "../redux/items/asyncActions";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectGoodsData);

  const { categoryId, sort, pageCount, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = React.useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
    },
    [dispatch]
  );

  const onChangePage = (page: number) => {
    dispatch(setPageCount(page));
  };

  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;

    dispatch(
      fetchGoods({
        sortBy,
        category,
        search,
        pageCount: String(pageCount),
      })
    );
    dispatch(
      fetchGoodsTotalCount({
        sortBy,
        category,
        search,
        pageCount: String(pageCount),
      })
    );

    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);
  const goods = items.map((obj) => <GoodsItem key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content_top">
          <Sort value={sort} />
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        </div>
      </div>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить товары. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className="container">
          <div className="content__items">
            {status === "loading" ? skeletons : goods}
          </div>
        </div>
      )}

      <div className="container">
        <Pagination
          items={items}
          currentPage={pageCount}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};

export default Home;
