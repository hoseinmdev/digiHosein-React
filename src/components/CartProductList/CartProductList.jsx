import CartProduct from "../CartProduct/CartProduct";
import styles from "./cartProductList.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useCart } from "../../context/CartProvider";
import emptyCart from "../../Accets/images/empty-shopping-trolley.png";
import { NavLink } from "react-router-dom";
const CartProductList = () => {
  const { state } = useCart();

  const renderProducts = () => {
    if (state.cart.length !== 0) {
      return (
        <div className={styles.cartBlock}>
          <div>
            <h2>سبد خرید شما</h2>
            <FaAngleDoubleLeft />
            <p>جمع کل : {state.total.toLocaleString("en")} تومان</p>
          </div>
          <div className={styles.cartProductsBlock}>
            {state.cart.map((p) => {
              return (
                <CartProduct
                  key={p.id}
                  title={p.title}
                  price={p.price}
                  imageURL={p.imageURL}
                  quantity={p.quantity}
                  id={p.id}
                />
              );
            })}
          </div>
        </div>
      );
    }
    if (state.cart.length === 0) {
      return (
        <div className={styles.emptyCartBlock}>
          <img
            style={{ width: "13rem", height: "13rem" }}
            src={emptyCart}
            alt="سبد شما خالی است"
          ></img>
          <h2 style={{ color: "#64748b" }}>سبد شما خالی است :(</h2>
          <NavLink to="/">
            <button>رفتن به صفحه محصولات</button>
          </NavLink>
        </div>
      );
    }
  };
  return renderProducts();
};

export default CartProductList;