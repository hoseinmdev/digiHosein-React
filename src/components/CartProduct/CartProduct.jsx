import { useCart } from "../../context/CartProvider";
import styles from "./cartProduct.module.css";
import { FaTrash } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const CartProduct = ({ title, price, imageURL, quantity, id }) => {
  const { dispatch } = useCart();
  const [fade, setFade] = useState(1);
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", price: price, id: id });
  };
  const decreaseHandler = () => {
    if (quantity === 1) {
      setFade(0);
      setTimeout(() => dispatch({ type: "DELETE", price: price, id: id }), 200);
    } else {
      dispatch({ type: "DECREASE", price:price,id: id });
    }
  };
  return (
    <div style={{ scale: `${fade}` }} className={styles.productBlock}>
      <div>
        <button className={styles.productBtn} onClick={increaseHandler}>
          +
        </button>
        <p>{quantity}</p>
        <button className={styles.productBtn} onClick={decreaseHandler}>
          {quantity === 1 ? (
            <FaTrash style={{ color: "#ef4444" }} />
          ) : (
            <AiOutlineMinus />
          )}
        </button>
        <img className={styles.imageStyle} src={imageURL} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <h4>{price.toLocaleString("en")} تومان</h4>
        <h4>تعداد : {quantity}</h4>
      </div>
    </div>
  );
};

export default CartProduct;
