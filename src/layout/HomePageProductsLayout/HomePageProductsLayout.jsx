import ShapeOnBackground from "components/common/ShapeOnBackground/ShapeOnBackgorund";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";
import styles from "./HomePageProductsLayout.module.css";
const HomePageProductsLayout = ({
  children,
  title,
  bgColor,
  titleColor,
  titleLineColor,
  smallShapeColor,
  normalShapeColor,
  bigShapeColor,
}) => {
  const [rightBtnDisplay, setRightBtnDisplay] = useState("none");
  const [leftBtnDisplay, setLeftBtnDisplay] = useState("flex");
  const [productsLength, setProductsLength] = useState();
  const [step, setStep] = useState(0);
  const productsBlockRef = useRef();

  useEffect(() => {
    setProductsLength(
      Math.round(children.length - productsBlockRef.current.offsetWidth / 215)
    );
  }, [step]);
  useEffect(() => {
    if (productsLength === 0) {
      setRightBtnDisplay("none");
      setLeftBtnDisplay("none");
    }
    if (productsLength !== 0) {
      setRightBtnDisplay("none");
      setLeftBtnDisplay("flex");
    }
    if (productsLength !== 0 && step !== 0) {
      setRightBtnDisplay("flex");
      setLeftBtnDisplay("flex");
    }
    if (productsLength !== 0 && step === productsLength) {
      setRightBtnDisplay("flex");
      setLeftBtnDisplay("none");
    }
  }, [step]);
  const passingProducts = (action) => {
    if (action === "NEXT_PRODUCT") {
      setStep(step - 1);
    }
    if (action === "BACK_PRODUCT") {
      setStep(step + 1);
    }
  };
  return (
    <div
      className={styles.productsContainer}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.shapes}>
        <ShapeOnBackground size="8rem" color={normalShapeColor} />
        <ShapeOnBackground size="6rem" color={smallShapeColor} />
        <ShapeOnBackground size="13rem" color={bigShapeColor} />
        <ShapeOnBackground size="6rem" color={smallShapeColor} />
        <ShapeOnBackground size="16rem" color={bigShapeColor} />
        <ShapeOnBackground size="7rem" color={normalShapeColor} />
      </div>
      <button
        className={styles.nextProduct}
        style={{ display: `${rightBtnDisplay}` }}
        onClick={() => passingProducts("NEXT_PRODUCT")}
      >
        <IoArrowRedoSharp />
      </button>
      <div className={styles.productsTitle}>
        <p style={{ color: titleColor }}>{title}</p>
        <hr style={{ backgroundColor: titleLineColor }} />
      </div>
      <div className={styles.productsBlock} ref={productsBlockRef}>
        <div
          className={styles.products}
          style={{ marginRight: `${step * -215}px` }}
        >
          {children}
        </div>
      </div>
      <button
        className={styles.backProduct}
        style={{ display: `${leftBtnDisplay}` }}
        onClick={() => passingProducts("BACK_PRODUCT")}
      >
        <IoArrowUndoSharp />
      </button>
    </div>
  );
};

export default HomePageProductsLayout;
