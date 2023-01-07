import styles from "./navigation.module.css";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FcShop } from "react-icons/fc";

const Navigation = () => {
  return (
    <div className={styles.siteNvigation}>
      <div className={styles.iconBlock}>
        سبد خرید
        <FaShoppingCart />
      </div>
      فروشگاه عمو حسین
      <div className={styles.iconBlock}>
        خانه
        <FaHome />
      </div>
    </div>
  );
};

export default Navigation;
