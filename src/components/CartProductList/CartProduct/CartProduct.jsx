import { useCart } from "../../../context/CartProvider";
import styles from "./cartProduct.module.css";
import { FaCheckCircle, FaRibbon, FaSketch, FaTrash } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartProduct = ({ product }) => {
  const { title, price, imageURL, quantity, id } = product;
  const { dispatch } = useCart();
  const [fade, setFade] = useState(1);
  const history = useNavigate();

  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: product,
      }
    );
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", price: price, id: id });
  };
  const decreaseHandler = () => {
    if (quantity === 1) {
      setFade(0);
      setTimeout(() => dispatch({ type: "DELETE", price: price, id: id }), 200);
    } else {
      dispatch({ type: "DECREASE", price: price, id: id });
    }
  };
  const deleteHandler = () => {
    setFade(0);
    setTimeout(() => dispatch({ type: "DELETE", price: price, id: id }), 200);
  };
  const renderIcon = () => {
    return quantity === 1 ? <FaTrash /> : <AiOutlineMinus />;
  };

  return (
    <div style={{ scale: `${fade}` }} className={styles.productBlock}>
      <div>
        <div
          style={{ scale: "1.3", marginBottom: "2.5rem", cursor: "pointer" }}
          onClick={deleteHandler}
        >
          <AiOutlineClose />
        </div>
        <img
          className={styles.imageStyle}
          src={imageURL}
          alt={title}
          onClick={renderProductPage}
        />
        <section className={styles.productInfoBlock}>
          <h4 onClick={renderProductPage}>{title}</h4>
          <p>{price.toLocaleString("en")} تومان</p>
          <div className={styles.productNumberController}>
            <div>
              <button onClick={increaseHandler}>+</button>
              <p>{quantity}</p>
              <button onClick={decreaseHandler}>{renderIcon()}</button>
            </div>
          </div>
        </section>
      </div>
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
  );
};

export default CartProduct;
