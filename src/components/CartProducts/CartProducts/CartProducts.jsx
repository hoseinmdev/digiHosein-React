import Product from "../Product/Product";
import styles from "./CartProducts.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../context/CartProvider";
import { useEffect } from "react";
import backToUp from "utils/BackToUp";
import EmptyCart from "../EmptyCart/EmptyCart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CartProducts = () => {
  const { state, dispatch } = useCart();
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  const userProducts = JSON.parse(localStorage.getItem("userProducts"));
  
  const navigate = useNavigate();
  const continueToBuyHandler = () => {
    if (userInformation.islogin) {
      toast.success("به سفارش شما رسیدگی خواهد شد :)");
      dispatch({ type: "DELETE_ALL" });
      navigate("/")
    } else {
      navigate("/sginUp");
    }
  };
  const renderProducts = () => {
    if (state.cart.length !== 0) {
      return (
        <div className={styles.cartBlock}>
          <div className={styles.userCartInformation}>
            <FaShoppingCart style={{ transform: "scaleX(-1)" }} />
            <h2>سبد خرید شما</h2>
            <p>جمع کل : {state.total.toLocaleString("en")} تومان</p>
          </div>
          <div className={styles.productsCheckoutBlock}>
            <div className={styles.productsBlock}>
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
            <div className={styles.checkoutBlock}>
              <h3>قیمت کالا ها : {state.total.toLocaleString("en")} تومان</h3>
              <button onClick={continueToBuyHandler}>به خرید ادامه بده</button>
            </div>
          </div>
        </div>
      );
    } else return <EmptyCart />;
  };
  return renderProducts();
};

export default CartProducts;
