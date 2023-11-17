import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaRibbon, FaSketch, FaTrash } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "redux/cartSlice";

const PurchasedProducts = () => {
  const cart = useSelector((state) => state.cart.products);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 overflow-auto rounded-lg p-4">
      {cart.map((product) => {
        return <PurchasedProduct key={product.id} product={product} />;
      })}
    </div>
  );
};

const PurchasedProduct = ({ product }) => {
  const { title, price, imageURL, quantity, id } = product;
  const [fade, setFade] = useState(1);
  const history = useNavigate();
  const dispatch = useDispatch();

  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      },
    );
  };
  const incrementHandler = () => {
    dispatch(incrementProduct(product));
  };
  const decrementHandler = () => {
    if (quantity === 1) {
      setFade(0);
      setTimeout(() => dispatch(deleteFromCart(product)), 200);
    } else dispatch(decrementProduct(product));
  };
  const deleteHandler = () => {
    setFade(0);
    setTimeout(() => dispatch(deleteFromCart(product)), 200);
  };
  const renderIcon = () => {
    return quantity === 1 ? <FaTrash /> : <AiOutlineMinus />;
  };

  return (
    <div
      className={`flex w-full items-center justify-between gap-4 overflow-auto rounded-lg bg-white p-2 shadow-sm dark:bg-gray-700 dark:text-white/80 ${
        fade ? "scale-100" : "scale-0"
      }`}
    >
      <div className="flex w-full items-center justify-between lg:w-1/2">
        <div
          className="mb-10 scale-125 lg:cursor-pointer"
          onClick={deleteHandler}
        >
          <AiOutlineClose />
        </div>
        <img
          className="h-24 w-24 lg:h-28 lg:w-28 lg:cursor-pointer"
          src={imageURL}
          alt={title}
          onClick={renderProductPage}
        />
        <div className="flex flex-col gap-3">
          <p className="text-sm" onClick={renderProductPage}>
            {title}
          </p>
          <p>{price.toLocaleString("en")} تومان</p>
          <div className="mr-4 flex w-24 items-center justify-between rounded-2xl bg-slate-100 dark:bg-gray-800 lg:mr-0">
            <button
              className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-700 dark:bg-slate-900 p-2 text-white lg:cursor-pointer"
              onClick={incrementHandler}
            >
              +
            </button>
            <p>{quantity}</p>
            <button
              className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-700 dark:bg-slate-900 p-2 text-white lg:cursor-pointer"
              onClick={decrementHandler}
            >
              {renderIcon()}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-48 flex-col items-start justify-center gap-3 lg:flex">
        <div className="flex items-center justify-end gap-4">
          <FaSketch className="text-sky-500" />
          <p>ضمانت هفت روزه کالا</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <FaRibbon className="text-yellow-400" />
          <p>18 ماه گارانتی</p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <FaCheckCircle className="text-green-600" />
          <p>ارسال سریع</p>
        </div>
      </div>
    </div>
  );
};

export default PurchasedProducts;
