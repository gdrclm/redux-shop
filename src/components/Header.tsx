import React from "react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppSelector } from "../redux/store";
import { selectCart } from "../redux/cart/selectors";

import Search from "./Search";
type Props = {};
export const Header: FC<Props> = () => {
  const { items, totalPrice } = useAppSelector(selectCart);

  const location = useLocation();
  const isMounted = React.useRef(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <svg className="icon" width={30} version="1.0" viewBox="0 0 64 64">
              <path d="M48 24h16V4c0-2-2-4-4-4H48v24zM24 0h16v24H24zm-8 24V0H4C2 0 0 2 0 4v20h16zM4 32v28c0 2 2 4 4 4h16V44h16v20h16c2 0 4-2 4-4V32H4z" />
            </svg>
          </Link>

          {location.pathname !== "/cart" && <Search />}
        </div>

        <div className="header_cart">
          {totalCount && totalPrice && (
            <Link className="header_link" to="/Cart">
              <div>
                <span>Товаров в корзине: {totalCount}</span> <br />
                <span>на сумму: {totalPrice}₽</span>
              </div>

              <svg className="icon" viewBox="0 0 485 485" width={30}>
                <path d="M145 318h269c30 0 54-24 54-53V151c0-6-6-12-12-12s-12 6-12 12v113c0 17-14 30-30 30H145c-16 0-30-13-30-30V40l-1-1v-2h-1v-1l-1-1v-1h-1l-1-1h-1l-1-1L34 1a12 12 0 1 0-9 22l66 28v298c0 28 22 51 49 53-5 9-8 19-8 30a53 53 0 1 0 97-29h128a53 53 0 0 0 44 82 53 53 0 0 0 0-106H145c-16 0-30-14-30-30v-40c9 6 19 9 30 9zm69 114a29 29 0 1 1-59 0 29 29 0 0 1 59 0zm216 0a29 29 0 1 1-58 0 29 29 0 0 1 58 0z" />
                <path d="M271 242h1v1h1c1 0 0 0 0 0l1 1h1l1 1h7v-1h2v-1h1l1-1h1l47-48a12 12 0 1 0-17-17l-27 27V38c0-7-5-12-12-12s-12 5-12 12v166l-27-27a12 12 0 1 0-17 17l48 48z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
