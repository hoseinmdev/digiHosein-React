import styles from "./navigation.module.css";
import { FaShoppingCart, FaHome, FaSearch , FaUser} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";

const Navigation = () => {
  const { state } = useCart();
  return (
    <div className={styles.siteNvigation}>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.isActive}` : `${styles.iconBlock}`
          }
          to="/"
        >
          <div>
            <FaHome />
            خانه
          </div>
          <span></span>
        </NavLink>
        <span className={styles.productCounter}>{state.cart.length}</span>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.isActive}` : `${styles.iconBlock}`
          }
          to="/cart"
        >
          <div>
            <FaShoppingCart style={{ transform: "scaleX(-1)" }} />
            سبد خرید
          </div>
          <span></span>
        </NavLink>
      </div>
      <div>
        <div>
          <FaUser/>
        </div>
        <label>
          <div>
            <FaSearch className={styles.searchIcon} />
            <input placeholder="جستجو برای ... " />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navigation;
