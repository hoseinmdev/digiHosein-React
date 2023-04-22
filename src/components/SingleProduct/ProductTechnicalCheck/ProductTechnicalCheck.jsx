import styles from "./productTechnicalCheck.module.css";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
const ProductTechnicalCheck = ({ product }) => {
  const allSpecifications = [];
  const allSpecificationsNames = [];
  const loopOnObject = Object.values(product.Specifications).forEach(function (
    value,
    index
  ) {
    allSpecifications.push(value.score);
    allSpecificationsNames.push({
      nameOfSpecification: value.title.split(" ")[0],
      scoreOfSpecification: value.score,
    });
  });
  const renderProductScores = () => {
    return allSpecificationsNames.map((p) => {
      return (
        <div className={styles.score}>
          <span>{p.scoreOfSpecification}</span>
          {p.nameOfSpecification}
        </div>
      );
    });
  };
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
        <div className={styles.scores}>{renderProductScores()}</div>
      </div>
    </div>
  );
};

export default ProductTechnicalCheck;
