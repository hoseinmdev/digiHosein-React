import styles from "./navigation.module.css";
import digiHosein from "../../../Accets/images/logo.jpg";
import {
  FaShoppingCart,
  FaHome,
  FaHeadphonesAlt,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../../context/CartProvider";
import { GoDeviceMobile } from "react-icons/go";
import { BsSmartwatch } from "react-icons/bs";
import SearchProducts from "../SearchProducts/SearchProducts";
const Navigation = () => {
  const { state } = useCart();
  const navLinkStyle = (isActive) => {
    return isActive
      ? `${styles.isActive} ${styles.optionContainer}`
      : `${styles.isNotActive} ${styles.optionContainer}`;
  };

  const items = [
    { title: "خانه", path: "/", icon: <FaHome /> },
    { title: "موبایل", path: "/categories/phones", icon: <GoDeviceMobile /> },
    { title: "تبلت", path: "/categories/tablets", icon: <FaTabletAlt /> },
    { title: "لپتاپ", path: "/categories/laptops", icon: <FaLaptopCode /> },
    {
      title: "ساعت هوشمند",
      path: "/categories/digitalWatches",
      icon: <BsSmartwatch />,
    },
    {
      title: "هدفون و هندزفری",
      path: "/categories/headphones",
      icon: <FaHeadphonesAlt />,
    },
    { title: "گیمینگ", path: "/categories/consoles", icon: <BiGame /> },
  ];
  return (
    <div className={styles.siteNvigation}>
      <div className={styles.topOfNavigation}>
        <div>
          <img src={digiHosein} alt="Digi Hosien" />
          <SearchProducts />
        </div>
        <div>
          <button className={styles.submitButton}>ورود | ثبت نام</button>
          <Link to="/cart">
            <button className={styles.cartButton}>
              <FaShoppingCart />
              <span className={styles.productsInCartCounter}>
                {state.cart.length}
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.downOfNavigation}>
        {items.map((item) => {
          return (
            <NavLink
              key={item.title}
              className={({ isActive }) => navLinkStyle(isActive)}
              to={item.path}
            >
              <div>
                {item.icon}
                {item.title}
              </div>
              <span></span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
