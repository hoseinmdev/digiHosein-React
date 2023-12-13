import Product from "components/common/Product";
import { allProducts } from "db";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";
const ProductsSlider = ({
  children,
  category,
  title,
  bgColor,
  titleColor = "text-gray-900 dark:text-white/70",
  titleLineColor = "bg-gray-900 dark:bg-gray-800",
}) => {
  const [rightBtnDisplay, setRightBtnDisplay] = useState("hidden");
  const [leftBtnDisplay, setLeftBtnDisplay] = useState("flex");
  const [productsLength, setProductsLength] = useState();
  const [step, setStep] = useState(0);
  const productsBlockRef = useRef();
  const productsToShow = allProducts.filter((p) => p.category === category);

  useEffect(() => {
    const offsetWidth = productsBlockRef.current.offsetWidth / 215;
    productsToShow.length !== 0
      ? setProductsLength(Math.round(productsToShow.length - offsetWidth))
      : setProductsLength(Math.round(children.length - offsetWidth));

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
      className={`relative mt-2 flex w-full max-w-[1360px] ml-auto mr-auto flex-col  rounded-2xl ${bgColor} items-start justify-center gap-8 overflow-hidden px-4 py-6 lg:rounded-xl lg:px-8`}
    >
      <button
        className={`absolute right-0 z-[1400] mr-14 hidden lg:${rightBtnDisplay} h-14 w-14 items-center justify-center rounded-full bg-white text-[1.8rem] text-gray-700 shadow-lg `}
        onClick={() => passingProducts("NEXT_PRODUCT")}
      >
        <IoArrowRedoSharp />
      </button>
      <div className="flex w-full flex-col gap-3 text-white">
        <p className={`font-EstedadFont text-2xl ${titleColor}`}>{title}</p>
        <hr className={`h-[2px] ${titleLineColor}`} />
      </div>
      <div
        className="z-2 hideScrollbar flex h-[19.7rem] w-full flex-col items-start justify-end gap-8 overflow-auto lg:h-[21.7rem] lg:max-w-[1360px] lg:justify-end lg:pb-4 "
        ref={productsBlockRef}
      >
        {/* Products */}
        <div
          className={`flex items-center justify-center gap-4`}
          style={{ marginRight: step * -215 }}
        >
          {productsToShow.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
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

export default ProductsSlider;
