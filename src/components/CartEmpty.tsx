import { FC } from "react";
import { Link } from "react-router-dom";

export const CartEmpty: FC = () => (
  <div className="cart cart-empty">
    <h2>Корзина пустая</h2>
    <p>
      Вы еще не выбрали не один товар.
      <br />
      Для того чтобы выбрать товар перейдите на главную страницу
    </p>
    <Link to="/" className="button">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
