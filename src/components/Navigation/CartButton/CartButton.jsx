import { useCart } from "context/CartProvider";
import { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CartButton.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import {TbArrowsExchange2} from "react-icons/tb"
import CartButtonProduct from "../CartButtonProduct/CartButtonProduct";
import { BsArrowLeftRight } from "react-icons/bs";
const CartButton = () => {
  const { state } = useCart();
  const [showCart, setShowCart] = useState(0);

  const hoveredHandler = () => {
    if (state.cart.length !== 0) setShowCart(!showCart);
  };
  const renderShowProduct = () => {
    return showCart ? (
      <div
        className={styles.externalCartContentContainer}
        onMouseEnter={() => setShowCart(1)}
        onMouseLeave={() => setShowCart(0)}
      >
        <div className={styles.innerCartContentContainer}>
          <div className={styles.topOfContainer}>
            <div className={styles.yourCartDetails}>
              <p>سبد خرید شما</p>
              <p className={styles.productLength}>
                {state.cart.length} عدد کالا
              </p>
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
              return <CartButtonProduct key={p.id} product={product} />;
            })}
          </div>
          <button className={styles.checkoutButton}>
            ورود و ثبت سفارش
            <BsArrowLeftRight/>
            <p>{state.total.toLocaleString("en")} تومان</p>
          </button>
        </div>
      </div>
    ) : (
      ""
    );
  };
  return (
    <div
      className={styles.fatherContainer}
      onMouseEnter={hoveredHandler}
      onMouseLeave={hoveredHandler}
    >
      {renderShowProduct()}
      <Link to="/cart">
        <button className={styles.cartButton}>
          <FaShoppingCart />
          <span className={styles.productsInCartCounter}>
            {state.cart.length}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartButton;
