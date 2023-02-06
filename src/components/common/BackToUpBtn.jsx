import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrow90DegUp, BsFillArrowUpCircleFill } from "react-icons/bs";
import styles from "./backToUpBtn.module.css";
const BackToUpBtn = () => {
  return (
    <div className={styles.backToUpBlock}>
      <button
        className={styles.backToUpBtn}
        onClick={() => {
          window.scrollTo({
            top: -1000,
            behavior: "smooth",
          });
        }}
      >
        <AiOutlineArrowUp className={styles.UpIcon} />
        بازگشت به بالا
      </button>
    </div>
  );
};

export default BackToUpBtn;
