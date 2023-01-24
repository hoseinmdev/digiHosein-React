import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartProvider";
import styles from "./product.module.css";
import { AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
const Product = ({ title, price, imageURL, id, Specifications , comment}) => {
  const { state, dispatch } = useCart();
  const [product, setProduct] = useState({})
  useEffect(() => setProduct({title, price, imageURL, id, Specifications, comment}), [])
  const history = useNavigate();


  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };


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
    history(
      { pathname: `product/${id}` },
      {
        state: product
      }
    );
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
      <button disabled={isInCart} onClick={clickHandler}>
        {isInCart ? (
          <Link style={{ textDecoration: "none" }} to="cart">
            <div className={styles.inCart}>
              <AiFillTag />
              <p>در سبد خرید</p>
            </div>
          </Link>
        ) : (
          <div className={styles.addToCart}>
            <AiOutlineShoppingCart style={{ transform: "scaleX(-1)" }} />
            <p>افزودن به سبد خرید</p>
          </div>
        )}
      </button>
      <p>{price.toLocaleString("en")} تومان</p>
    </div>
  );
};

export default Product;
