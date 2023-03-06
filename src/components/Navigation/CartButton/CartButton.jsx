import { useCart } from "context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CartButton.module.css";
const CartButton = () => {
  const { state } = useCart();
  return (
    <Link to="/cart">
      <button className={styles.cartButton}>
        <FaShoppingCart />
        <span className={styles.productsInCartCounter}>
          {state.cart.length}
        </span>
      </button>
    </Link>
  );
};

export default CartButton;
