import { useNavigate } from "react-router-dom";
import styles from "./Product2.module.css";
import { AiFillCamera, AiOutlineMobile } from "react-icons/ai";
import { BsBatteryFull } from "react-icons/bs";
import { MdBatteryChargingFull, MdScreenshot } from "react-icons/md";
const Product2 = ({ product }) => {
  const history = useNavigate();
  const { id, title, price, imageURL } = product;
  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      }
    );
  };
  return (
    <div className={styles.productContainer}>
      <p className={styles.titleOfProduct} onClick={renderProductPage}>
        {title}
      </p>
      <div className={styles.DownOfContainer}>
        <img
          src={imageURL}
          alt={product.title}
          className={styles.imageOfProduct}
          onClick={renderProductPage}
        />
        <div className={styles.priceAndInfoContainer}>
          <div className={styles.productInfo}>
            <div>
              <AiFillCamera />
              <p>{product.camera}</p>
            </div>
            <div>
              <MdBatteryChargingFull />
              <p>{product.battery}</p>
            </div>
            <div>
              <MdScreenshot />
              <p>{product.screen}</p>
            </div>
          </div>
          <p>{price.toLocaleString("en")} تومان</p>
        </div>
      </div>
    </div>
  );
};

export default Product2;
