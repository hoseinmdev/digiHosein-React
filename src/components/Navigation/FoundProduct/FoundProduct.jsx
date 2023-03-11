import { useNavigate } from "react-router-dom";
import styles from "./FoundProduct.module.css";
const FoundProduct = ({ id, imageURL, title }) => {
  const history = useNavigate();

  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      }
    );
  };
  return (
    <div className={styles.productContainer} onClick={renderProductPage}>
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default FoundProduct;
