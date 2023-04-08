import { AiOutlineClose } from "react-icons/ai";
import styles from "./MobileMenu.module.css";
import siteLofo from "../../../Accets/images/logo.jpg";
import {
  FaHeadphonesAlt,
  FaHome,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { BsArrowLeftShort, BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import { BiGame } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const MobileMenu = ({ setShowMobileMenu }) => {
  useEffect(() => {
    document.body.classList.toggle(styles.bodyStyles);
    setTimeout(() => setShow(0), 100);
  }, []);
  const [show, setShow] = useState(-450);
  const items = [
    { title: "خانه", path: "/", icon: <FaHome /> },
    {
      title: "گوشی های موبایل",
      path: "/categories/phones",
      icon: <GoDeviceMobile />,
    },
    { title: "تبلت ها", path: "/categories/tablets", icon: <FaTabletAlt /> },
    { title: "لپتاپ ها", path: "/categories/laptops", icon: <FaLaptopCode /> },
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
    { title: "محصولات گیمینگ", path: "/categories/consoles", icon: <BiGame /> },
  ];
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => {
          setShow(-450);
          setTimeout(() => setShowMobileMenu(0), 200);
          document.body.classList.remove(styles.bodyStyles);
        }}
      ></div>
      <div className={styles.menuContainer} style={{ right: `${show}px` }}>
        <div className={styles.topOfMenu}>
          <AiOutlineClose
            onClick={() => {
              setShow(-450);
              setTimeout(() => setShowMobileMenu(0), 200);
              document.body.classList.remove(styles.bodyStyles);
            }}
          />
          <img src={siteLofo} alt="دیجی حسین" className={styles.siteLogo} />
        </div>
        <hr />
        <div className={styles.optionsInMenu}>
          {items.map((item) => {
            return (
              <Link
                to={item.path}
                className={styles.optionLink}
                key={item.path}
                onClick={() => {
                  setShow(-450);
                  setTimeout(() => setShowMobileMenu(0), 200);
                  document.body.classList.remove(styles.bodyStyles);
                }}
              >
                <div className={styles.option}>
                  <p className={styles.optionIcon}>{item.icon}</p>
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
