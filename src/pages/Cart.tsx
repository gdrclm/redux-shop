import { FC } from "react";
import { CartEmpty, CartItem } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCart } from "../redux/cart/selectors";
import { clearItems } from "../redux/cart/slice";
import { Link } from "react-router-dom";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { totalPrice, items } = useAppSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickClear = () => {
    if (window.confirm("clear cart?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart_top">
          <h2 className="content_title">Корзина</h2>
          <button onClick={onClickClear} className="card_clear">
            очистить корзину
          </button>
        </div>
        <div className="content_items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart_bottom">
          <div className="cart_bottom_left">
            <p className="cart_total_items">
              Всего товаров: <b>{totalCount} шт</b>
            </p>
          </div>
          <div className="cart_bottom_right">
            <p className="card_total_price button button--outline button--add go-back-btn">
              Сумма заказа: <b>{totalPrice}₽</b>
            </p>
            <div className="card_pay">Оплатить</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
