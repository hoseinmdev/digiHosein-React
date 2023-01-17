import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartProvider";
import styles from "./product.module.css";

const Product = ({ title, price, imageURL, id }) => {
  const history = useNavigate()
  const { state, dispatch } = useCart();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const isInCart = state.cart.find((p) => p.id === id);
  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد");
    dispatch({
      type: "ADD_TO_CART",
      product: {
        id: id,
        title: title,
        price: price,
        imageURL: imageURL,
        quantity: 1,
      },
    });
  };
  const renderProductPage = () => {
    history("product")
  }
  return (

      <div className={styles.productBlock}>
        <img
          className={styles.imageStyle}
          src={imageURL}
          alt={title}
          onClick={renderProductPage}
        />
        <h4>{title}</h4>
        <button
          className={isInCart ? styles.inCart : styles.addToCart}
          disabled={isInCart}
          onClick={clickHandler}
        >
          {isInCart ? (
            <Link className={styles.inCart} to="cart">
              در سبد خرید
            </Link>
          ) : (
            "افزودن به سبد خرید"
          )}
        </button>
        <h4>{price.toLocaleString("en")} تومان</h4>
      </div>
  );
};

export default Product;
