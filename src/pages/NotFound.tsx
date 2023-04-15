import { useNavigate } from "react-router-dom";
import NotFoundBlock from "../components/NotFoundBlock";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <NotFoundBlock />
      <button onClick={() => navigate("/")}>назад</button>
    </>
  );
};
export default NotFound;
