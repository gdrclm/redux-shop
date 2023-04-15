import { FC, useEffect } from "react";
import { Goods } from "../redux/items/types";

type Props = Partial<Goods> & {
  type: string;

  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductModalDescription: FC<Props> = ({
  name,
  price,
  imageUrl,
  expirationDate,
  description,
  kKal,
  setModalOpened,
}) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setModalOpened(false);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [setModalOpened]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setModalOpened(false);
  };

  return (
    <div
      className="modalBackground"
      tabIndex={0}
      onClick={handleBackgroundClick}
    >
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="titleCloseBtn">
          <button
            className="close-btn"
            onClick={() => {
              setModalOpened(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="body">
          <img src={imageUrl} alt="img" />
        </div>
        <div className="footer">
          <p>{description}</p>
          <p>
            <span>количество калорий:</span> {kKal}
          </p>
          <p>
            <span>срок годности: </span> {expirationDate}
          </p>
          <p>
            <span>Цена: </span> {price}₽
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductModalDescription;
