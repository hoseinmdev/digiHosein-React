import styles from "./circleCategories.module.css";
import mobile from "../../Accets/images/mobileCategories.webp";
import laptop from "../../Accets/images/laptopCategories.webp";
import tablet from "../../Accets/images/tabletCategories.webp";
import digitalWatch from "../../Accets/images/digitalWatchCategories.webp";
import airpods from "../../Accets/images/airpodsCategories.webp";
import console from "../../Accets/images/consolCategories.webp";
const CircleCategories = () => {
  return (
    <div className={styles.categoriesBlock}>
      <div>
        <img src={mobile} alt={mobile} />
        گوشی موبایل
      </div>
      <div>
        <img src={laptop} alt={laptop} />
        لپتاپ
      </div>
      <div>
        <img src={tablet} alt={tablet} />
        تبلت
      </div>
      <div>
        <img src={digitalWatch} alt={digitalWatch} />
        ساعت هوشمند
      </div>
      <div>
        <img src={airpods} alt={airpods} />
        هدفون و هندزفری
      </div>
      <div>
        <img src={console} alt={console} />
        گیمینگ
      </div>
    </div>
  );
};

export default CircleCategories;
