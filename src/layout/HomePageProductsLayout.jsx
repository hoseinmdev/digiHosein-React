import { useRef } from "react";
import { useEffect, useState } from "react";
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";
const HomePageProductsLayout = ({
  children,
  title,
  bgColor,
  titleColor = "text-gray-900",
  titleLineColor = "bg-gray-900",
}) => {
  const [rightBtnDisplay, setRightBtnDisplay] = useState("hidden");
  const [leftBtnDisplay, setLeftBtnDisplay] = useState("flex");
  const [productsLength, setProductsLength] = useState();
  const [step, setStep] = useState(0);
  const productsBlockRef = useRef();

  useEffect(() => {
    setProductsLength(
      Math.round(children.length - productsBlockRef.current.offsetWidth / 215),
    );
  }, [step]);
  useEffect(() => {
    if (productsLength === 0) {
      setRightBtnDisplay("hidden");
      setLeftBtnDisplay("hidden");
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
      setLeftBtnDisplay("hidden");
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
      className={`relative flex w-full flex-col ${bgColor} items-start justify-center gap-8 overflow-hidden px-8 py-6`}
    >
      <button
        className={`z-5 absolute right-0 mr-14 hidden lg:${rightBtnDisplay} h-14 w-14 items-center justify-center rounded-full bg-white text-[1.8rem] text-gray-700 shadow-lg `}
        onClick={() => passingProducts("NEXT_PRODUCT")}
      >
        <IoArrowRedoSharp />
      </button>
      <div className="flex w-full flex-col gap-3 text-white">
        <p className={`text-2xl ${titleColor}`}>{title}</p>
        <hr className={`h-[2px] ${titleLineColor}`} />
      </div>
      <div
        className="z-2 hideScrollbar flex h-96 max-w-[1360px] flex-col items-start justify-center gap-8 overflow-auto lg:overflow-hidden"
        ref={productsBlockRef}
      >
        <div
          className={`flex items-center justify-center gap-4`}
          style={{ marginRight: step * -215 }}
        >
          {children}
        </div>
      </div>
      <button
        className={`z-5 lg:${leftBtnDisplay} absolute left-0 ml-14 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-[1.8rem] text-gray-700 shadow-lg`}
        onClick={() => passingProducts("BACK_PRODUCT")}
      >
        <IoArrowUndoSharp />
      </button>
    </div>
  );
};

export default HomePageProductsLayout;
