import { useCart } from "../../context/CartProvider";
import { FaCheckCircle, FaRibbon, FaSketch, FaTrash } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { title, price, imageURL, quantity, id } = product;
  const { dispatch } = useCart();
  const [fade, setFade] = useState(1);
  const history = useNavigate();

  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      },
    );
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", price: price, id: id });
  };
  const decreaseHandler = () => {
    if (quantity === 1) {
      setFade(0);
      setTimeout(() => dispatch({ type: "DELETE", price: price, id: id }), 200);
    } else {
      dispatch({ type: "DECREASE", price: price, id: id });
    }
  };
  const deleteHandler = () => {
    setFade(0);
    setTimeout(() => dispatch({ type: "DELETE", price: price, id: id }), 200);
  };
  const renderIcon = () => {
    return quantity === 1 ? <FaTrash /> : <AiOutlineMinus />;
  };

  return (
    <div
      style={{ scale: `${fade}` }}
      className="flex w-full items-center justify-between gap-4 overflow-auto rounded-lg bg-white p-2 shadow-sm"
    >
      <div className="flex w-full items-center justify-between lg:w-1/2">
        <div className="mb-10 scale-125 cursor-pointer" onClick={deleteHandler}>
          <AiOutlineClose />
        </div>
        <img
          className="h-24 w-24 cursor-pointer lg:h-28 lg:w-28"
          src={imageURL}
          alt={title}
          onClick={renderProductPage}
        />
        <div className="flex flex-col gap-3">
          <p className="text-sm" onClick={renderProductPage}>
            {title}
          </p>
          <p>{price.toLocaleString("en")} تومان</p>
          <div className="mr-4 flex w-24 items-center justify-between rounded-2xl bg-slate-100 lg:mr-0">
            <button
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-2xl bg-slate-700 p-2 text-white"
              onClick={increaseHandler}
            >
              +
            </button>
            <p>{quantity}</p>
            <button
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-2xl bg-slate-700 p-2 text-white"
              onClick={decreaseHandler}
            >
              {renderIcon()}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-48 flex-col items-start justify-center gap-3 lg:flex">
        <div className="flex items-center justify-end gap-4">
          <FaSketch style={{ color: "#60a5fa" }} />
          <p>ضمانت هفت روزه کالا</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <FaRibbon style={{ color: "#fbbf24" }} />
          <p>18 ماه گارانتی</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <FaCheckCircle style={{ color: "#166534" }} />
          <p>ارسال سریع</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
