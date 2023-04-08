import { AiOutlineClose } from "react-icons/ai";
import styles from "./FilterOptionsMobile.module.css";
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
const FilterOptionsMobile = ({
  setShowMobileFilters,
  renderFilters,
  renderDeleteFiltersBtn,
}) => {
  useEffect(() => {
    document.body.classList.toggle(styles.bodyStyles);
    setTimeout(() => setShow(0), 100);
  }, []);
  const [show, setShow] = useState(-450);
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => {
          setShow(-450);
          setTimeout(() => setShowMobileFilters(0), 200);
          document.body.classList.remove(styles.bodyStyles);
        }}
      ></div>
      <div className={styles.menuContainer} style={{ right: `${show}px` }}>
        <div className={styles.topOfMenu}>
          <AiOutlineClose
            onClick={() => {
              setShow(-450);
              setTimeout(() => setShowMobileFilters(0), 200);
              document.body.classList.remove(styles.bodyStyles);
            }}
          />
          {renderDeleteFiltersBtn()}
        </div>
        <div className={styles.optionsInMenu}>{renderFilters()}</div>
      </div>
    </>
  );
};

export default FilterOptionsMobile;
