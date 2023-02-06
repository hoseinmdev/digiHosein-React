import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartProvider";
import styles from "./product.module.css";
import { AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product }) => {
  const { id, title, price, imageURL } = product;
  const { state, dispatch } = useCart();
  const history = useNavigate();

  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد");
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
  const renderProductPage = () => {
    history(
      { pathname: `product/${id}` },
      {
        state: product,
      }
    );
  };
  const renderAddToCartButton = () => {
    const isInCart = state.cart.find((p) => p.id === id);
    if (isInCart) {
      return (
        <Link to="/cart" className={`${styles.productButton} ${styles.inCart}`}>
          <AiFillTag />
          <p>در سبد خرید</p>
        </Link>
      );
    } else {
      return (
        <button
          className={`${styles.productButton} ${styles.addToCart}`}
          onClick={clickHandler}
        >
          <AiOutlineShoppingCart style={{ transform: "scaleX(-1)" }} />
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
      <h4 className={styles.productTitle} onClick={renderProductPage}>
        {title}
      </h4>
      {renderAddToCartButton()}
      <p>{price.toLocaleString("en")} تومان</p>
    </div>
  );
};

export default Product;
