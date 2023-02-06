import styles from "./productTechnicalCheck.module.css";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
const ProductTechnicalCheck = ({ product }) => {
  const allSpecifications = [
    product.Specifications.cpu.score,
    product.Specifications.screen.score,
    product.Specifications.storage.score,
    product.Specifications.battery.score,
    product.Specifications.speaker.score,
    product.Specifications.camera.score,
  ];
  let totalScores = 0;
  allSpecifications.map((e) => (totalScores += e));
  
  return (
    <div className={styles.checkProductBlock}>
      <div className={styles.checkProductTitle}>
        <p>بررسی فنی</p>
        <hr />
      </div>
      <p>{product.technicalCheck}</p>
      <div className={styles.positivePointsBlock}>
        <div className={styles.positivePointsTitle}>
          <AiOutlineLike />
          مزایا :
        </div>
        <div className={styles.positivePoints}>
          {product.positivePoints.map((p) => {
            return (
              <div key={p} className={styles.positivePoint}>
                <AiOutlinePlusCircle />
                {p}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.negativePointsBlock}>
        <div className={styles.negativePointsTitle}>
          <AiOutlineDislike />
          معایب :
        </div>
        <div className={styles.negativePoints}>
          {product.negativePoints.map((p) => {
            return (
              <div key={p} className={styles.negativePoint}>
                <AiOutlineMinusCircle />
                {p}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.scoresBlock}>
        <div className={styles.scoreResult}>
          <span>{Math.round(totalScores / allSpecifications.length)}</span>
          امتیاز کلی
        </div>
        <hr />
        <div className={styles.scores}>
          <div className={styles.score}>
            <span>{product.Specifications.screen.score}</span>
            صفحه نمایش
          </div>
          <div className={styles.score}>
            <span>{product.Specifications.cpu.score}</span>
            سخت افزار
          </div>
          <div className={styles.score}>
            <span>{product.Specifications.speaker.score}</span>
            صدا
          </div>
          <div className={styles.score}>
            <span>{product.Specifications.camera.score}</span>
            دوربین
          </div>
          <div className={styles.score}>
            <span>{product.Specifications.storage.score}</span>
            حافظه
          </div>
          <div className={styles.score}>
            <span>{product.Specifications.battery.score}</span>
            باتری
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTechnicalCheck;
