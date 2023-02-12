import styles from "./backToUpBtn.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import backToUp from "./BackToUp";
const BackToUp = () => {
  return (
    <div className={styles.backToUpPosition}>
      <button className={styles.backToUp} onClick={() => backToUp()}>
        <AiOutlineArrowUp /> بازگشت به بالا
      </button>
    </div>
  );
};

export default BackToUp;
