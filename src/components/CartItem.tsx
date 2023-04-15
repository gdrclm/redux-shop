import { FC } from "react";
import { useAppDispatch } from "../redux/store";
import { addItem, minusItem, removeItem } from "../redux/cart/slice";
import { CartItem as CartItemType } from "../redux/cart/types";

type CartItemProps = {
  id: string;
  name: string;
  type: string;
  expirationDate: number;
  kkal: string;
  description: string;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  count,
  imageUrl,
  expirationDate,
  description,
  kkal,
}) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItemType));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="item-block__image" src={imageUrl} alt="Item" />
      </div>

      <div className="cart__item-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-expirationDate">{expirationDate}</p>
        <p className="product-kkal">{kkal}</p>
        <div className="cart__item-price">
          <b>{price * count} ₽</b>
        </div>
        <p className="description">{description}</p>
        <div className="cart__item-count">
          <button
            disabled={count === 1}
            onClick={onClickMinus}
            className="button button--outline button--circle cart__item-count-minus"
          >
            -
          </button>
          <button
            className="button button--outline button--circle cart__item-count-minus"
            onClick={onClickPlus}
          >
            +
          </button>

          <button
            className="button button--outline cart__item-remove"
            onClick={onClickRemove}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
