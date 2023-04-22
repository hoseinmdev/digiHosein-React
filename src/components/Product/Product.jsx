import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartProvider";
import styles from "./product.module.css";
import { AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
import { RiChatDeleteFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

const Product = ({ product }) => {
  const { id, title, price, imageURL, category } = product;
  const { state, dispatch } = useCart();
  const isInCart = state.cart.find((p) => p.id === id);
  const history = useNavigate();
  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد");
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", price: price, id: id });
  };
  const decreaseHandler = () => {
    if (isInCart.quantity === 1) {
      toast.error("محصول حذف شد", {
        icon: <RiChatDeleteFill />,
        bodyClassName: styles.toastText,
        progressClassName: styles.toastLine,
      });
      dispatch({ type: "DELETE", price: price, id: id });
    } else {
      dispatch({ type: "DECREASE", price: price, id: id });
    }
  };
  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      }
    );
  };
  const renderAddToCartButton = () => {
    if (isInCart) {
      return (
        <div className={styles.inCartBlock}>
          <button onClick={increaseHandler}>+</button>
          <Link
            to="/cart"
            className={`${styles.productButton} ${styles.inCart}`}
          >
            <AiFillTag />
            <p>در سبد خرید</p>
            <p className={styles.quantityOfProduct}>{isInCart.quantity}</p>
          </Link>
          <button onClick={decreaseHandler}>
            {isInCart.quantity === 1 ? (
              <FaTrash className={styles.deleteIcon} />
            ) : (
              "−"
            )}
          </button>
        </div>
      );
    } else {
      return (
        <button
          className={`${styles.productButton} ${styles.addToCart}`}
          onClick={clickHandler}
        >
          <AiOutlineShoppingCart />
          <p>افزودن به سبد خرید</p>
        </button>
      );
    }
  };
  return (
    <div className={styles.productBlock}>
      <img
        className={styles.imageStyle}
        src={imageURL}
        alt={title}
        onClick={renderProductPage}
      />
      <div className={styles.productInfoContainer}>
        <h4 className={styles.productTitle} onClick={renderProductPage}>
          {title}
        </h4>
        {renderAddToCartButton()}
        <p className={styles.productPrice}>
          {price.toLocaleString("en")} تومان
        </p>
      </div>
    </div>
  );
};

export default Product;
