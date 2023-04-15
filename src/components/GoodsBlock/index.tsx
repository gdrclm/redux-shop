import { FC, useState } from "react";
import { CartItem } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Goods } from "../../redux/items/types";
import { selectCardItemById } from "../../redux/cart/selectors";
import ProductModalDescription from "../ProductModalDescription";

type GoodsBlockProps = Goods;

export const GoodsBlock: FC<GoodsBlockProps> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  expirationDate,
  kKal,
}) => {
  const dispatch = useAppDispatch();
  const [modalOpened, setModalOpened] = useState(false);
  const cartItem = useAppSelector(selectCardItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      imageUrl,
      description,

      count: 0,
      type: "",
    };

    dispatch(addItem(item));
  };

  return (
    <div className="product">
      <div
        className="product-image"
        onClick={() => {
          setModalOpened(true);
        }}
      >
        <img src={imageUrl} alt={name} />
      </div>

      {modalOpened && (
        <ProductModalDescription
          setModalOpened={setModalOpened}
          name={name}
          type={""}
          expirationDate={expirationDate}
          kKal={kKal}
          description={description}
          price={price}
          imageUrl={imageUrl}
        />
      )}
      <div className="products-info-wrapper">
        <p className="products-name">{name}</p>
        <p className="product-price">{price}₽</p>
        <p className="product-kkal">количество калорий: {kKal}</p>
      </div>
      <button className="add-item" onClick={onClickAdd}>
        <span>Добавить</span>
        {addedCount > 0 && <i> {addedCount}</i>}
      </button>
    </div>
  );
};

export default GoodsBlock;
