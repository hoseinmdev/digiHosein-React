import styles from "./navigation.module.css";
import digiHosein from "../../../Accets/images/logo.jpg";
import {
  FaHome,
  FaHeadphonesAlt,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GoDeviceMobile } from "react-icons/go";
import { BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import SearchProducts from "../SearchProducts/SearchProducts";
import CartButton from "../CartButton/CartButton";

const items = [
  { title: "خانه", path: "/", icon: <FaHome /> },
  { title: "موبایل", path: "/categories/phones", icon: <GoDeviceMobile /> },
  { title: "تبلت", path: "/categories/tablets", icon: <FaTabletAlt /> },
  { title: "لپتاپ", path: "/categories/laptops", icon: <FaLaptopCode /> },
  {
    title: "اسپیکر و بلندگو",
    path: "/categories/speakers",
    icon: <BsSpeakerFill />,
  },
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

const Navigation = () => {
  const navLinkStyle = (isActive) => {
    return isActive
      ? `${styles.isActive} ${styles.optionContainer}`
      : `${styles.isNotActive} ${styles.optionContainer}`;
  };

  return (
    <div className={styles.siteNvigation}>
      <div className={styles.topOfNavigation}>
        <div className={styles.navigationLogoAndSearchBox}>
          <img src={digiHosein} alt="Digi Hosien" className={styles.siteLogo} />
          <SearchProducts />
        </div>
        <div className={styles.navigationCartBtnAndSubmitBtn}>
          <button className={styles.submitButton}>ورود | ثبت نام</button>
          <CartButton />
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
