import styles from "./navigation.module.css";
import digiHosein from "../../../Accets/images/logo.jpg";
import {
  FaHome,
  FaHeadphonesAlt,
  FaLaptopCode,
  FaTabletAlt,
  FaUserCircle,
} from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { GoDeviceMobile } from "react-icons/go";
import { BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import SearchProducts from "../SearchProducts/SearchProducts";
import CartButton from "../CartButton/CartButton";
import { useEffect, useState } from "react";
import UserAccountButton from "../UserAccountButton/UserAccountButton";
import { AiOutlineMenu } from "react-icons/ai";

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
  const [isLogin, setIsLogin] = useState();
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  useEffect(() => {
    if (userInformation && userInformation.islogin) setIsLogin(1);
  }, [userInformation]);
  const navLinkStyle = (isActive) => {
    return isActive
      ? `${styles.isActive} ${styles.optionContainer}`
      : `${styles.isNotActive} ${styles.optionContainer}`;
  };

  return (
    <>
      <div className={styles.siteNvigation}>
        <div className={styles.topOfNavigation}>
          <div className={styles.navigationLogoAndSearchBox}>
            <img
              src={digiHosein}
              alt="Digi Hosien"
              className={styles.siteLogo}
            />
            <SearchProducts />
          </div>
          {isLogin ? (
            <div className={styles.navigationCartBtnAndSubmitBtn}>
              <UserAccountButton />
              <CartButton />
            </div>
          ) : (
            <div className={styles.navigationCartBtnAndSubmitBtn}>
              <Link to="/sginUp">
                <button className={styles.submitButton}>ورود | ثبت نام</button>
              </Link>
              <CartButton />
            </div>
          )}
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
      <div className={styles.siteNvigationMobile}>
        <div className={styles.topOfNavigationMobile}>
          <AiOutlineMenu className={styles.menuButton} />
          <img src={digiHosein} alt="Digi Hosien" className={styles.siteLogo} />
          {isLogin ? (
            <div className={styles.navigationCartBtnAndSubmitBtn}>
              <UserAccountButton />
            </div>
          ) : (
            <Link to="/sginUp">
              <div className={styles.navigationCartBtnAndSubmitBtn}>
                <button className={styles.submitButton}>ورود | ثبت نام</button>
              </div>
            </Link>
          )}
        </div>
        <div className={styles.downOfNavigation}>
          <SearchProducts />
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default Navigation;
