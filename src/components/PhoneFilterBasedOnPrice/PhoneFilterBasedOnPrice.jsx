import styles from "./PhoneFilterBasedOnPrice.module.css";
import ta3mil from "../../Accets/images/ta3mil.png";
import seTa5mil from "../../Accets/images/3ta5mil.webp";
import panjTa7mil from "../../Accets/images/5ta7mil.webp";
import haftTa10mil from "../../Accets/images/7ta10mil.webp";
import dahTa15mil from "../../Accets/images/10ta15mil.webp";
import poonzdahMilBeBala from "../../Accets/images/15milBeBala.webp";
const PhoneFilterBasedOnPrice = () => {
  return (
    <div className={styles.optionsContainer}>
      <div className={styles.optionsTitle}>
        <p>موبایل بر اساس قیمت</p>
        <hr />
      </div>
      <div className={styles.options}>
        <div>
          <img src={ta3mil} />
        </div>
        <div>
          <img src={seTa5mil} />
        </div>
        <div>
          <img src={panjTa7mil} />
        </div>
        <div>
          <img src={haftTa10mil} />
        </div>
        <div>
          <img src={dahTa15mil} />
        </div>
        <div>
          <img src={poonzdahMilBeBala} />
        </div>
      </div>
    </div>
  );
};

export default PhoneFilterBasedOnPrice;
