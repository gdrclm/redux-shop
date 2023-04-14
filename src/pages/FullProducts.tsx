import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullProducts: React.FC = () => {
  const [products, setProducts] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
    description: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchGoods() {
      try {
        const { data } = await axios.get(
          "https://63aa356f594f75dc1dcb2168.mockapi.io/goods/" + id
        );
        setProducts(data);
      } catch (error) {
        alert("Ошибка при получении товара!");
        navigate("/");
      }
    }

    fetchGoods();
  }, [id, navigate]);

  if (!products) {
    return <>загрузка...</>;
  }

  <div className="container">
    <img src={products.imageUrl} alt="" />
    <h2>{products.name}</h2>
    <h4>{products.price} ₽</h4>
    <p>{products.description}</p>
    <Link to="/">
      <button className="button button--outline button--add">
        <span>Назад</span>
      </button>
    </Link>
  </div>;
  return <></>;
};
export default FullProducts;
