import { useCart } from "context/CartProvider";
import { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CartButton.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import Product from "components/CartProducts/Product/Product";
const CartButton = () => {
  const { state } = useCart();
  const [showCart, setShowCart] = useState(false);
  console.log(showCart);
  const hoveredHandler = () => {
    setShowCart(!showCart);
  };
  const renderShowProduct = () => {
    return (
      <div
        style={{ display: showCart ? "flex" : "none" }}
        className={styles.cartContentContainer}
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={hoveredHandler}
      >
        <div className={styles.topOfContainer}>
          <div className={styles.yourCartDetails}>
            <p>سبد خرید شما</p>
            <p className={styles.productLength}>{state.cart.length} عدد کالا</p>
          </div>
          <Link className={styles.showCartLink} to="/cart">
            مشاهده سبد خرید
            <BiLeftArrowAlt />
          </Link>
        </div>
        <div className={styles.cartContent}>
          {state.cart.map((p) => {
            const product = {
              id: p.id,
              type: p.type,
              title: p.title,
              price: p.price,
              imageURL: p.imageURL,
              Specifications: p.Specifications,
              comments: p.comments,
              quantity: p.quantity,
              technicalCheck: p.technicalCheck,
              positivePoints: p.positivePoints,
              negativePoints: p.negativePoints,
            };
            return <Product key={p.id} product={product} />;
          })}
        </div>
      </div>
    );
  };
  return (
    <>
      <Link to="/cart">
        <button
          className={styles.cartButton}
          onMouseEnter={hoveredHandler}
          onMouseLeave={() => setTimeout(() => hoveredHandler(), 200)}
        >
          <FaShoppingCart />
          <span className={styles.productsInCartCounter}>
            {state.cart.length}
          </span>
        </button>
      </Link>
      {renderShowProduct()}
    </>
  );
};

export default CartButton;
