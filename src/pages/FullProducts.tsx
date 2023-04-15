import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";

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
    async function fetchGoodsById() {
      try {
        const { data } = await axios.get(API_URL + id);
        setProducts(data);
      } catch (error) {
        alert("Ошибка при получении товара!");
        navigate("/");
      }
    }

    fetchGoodsById();
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
