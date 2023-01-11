import styles from "./navigation.module.css";
import { FaShoppingCart, FaHome, FaSearch} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.isActive}` : `${styles.iconBlock}`
          }
          to="/cart"
        >
          <div>
            <FaShoppingCart />
            سبد خرید
          </div>
          <span></span>
        </NavLink>
      </div>
      <div>
        <label>
          <div>
            <FaSearch className={styles.searchIcon}/>
            <input placeholder="جستجو برای ... " />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navigation;
