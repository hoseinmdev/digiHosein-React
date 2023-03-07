import { FaCheckCircle, FaRibbon, FaSketch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CartButtonProduct.module.css";
const CartButtonProduct = ({ product }) => {
  const history = useNavigate();
  const renderProductPage = () => {
    history(
      { pathname: `/product/${product.id}` },
      {
        state: product.id,
      }
    );
  };
  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetail}>
        <h4 onClick={renderProductPage}>{product.title}</h4>
        <div className={styles.productOptions}>
          <div>
            <FaSketch style={{ color: "#60a5fa" }} />
            <p>ضمانت هفت روزه کالا</p>
          </div>
          <div>
            <FaRibbon style={{ color: "#fbbf24" }} />
            <p>18 ماه گارانتی</p>
          </div>
          <div>
            <FaCheckCircle style={{ color: "#166534" }} />
            <p>ارسال سریع</p>
          </div>
        </div>
      </div>
      <div className={styles.productImageAndPrice}>
        <img src={product.imageURL} onClick={renderProductPage} />
        <p>{product.price.toLocaleString("en")} تومان</p>
      </div>
    </div>
  );
};

export default CartButtonProduct;
