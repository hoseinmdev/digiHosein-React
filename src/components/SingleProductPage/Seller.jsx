import {
  AiFillTag,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { FaRibbon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartProvider";
import fastSubmit from "../../assets/images/esraleSari.png";
const Seller = ({ product }) => {
  const { state, dispatch } = useCart();
  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد");
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
  const renderAddToCartButton = () => {
    const isInCart = state.cart.find((p) => p.id === product.id);
    if (isInCart) {
      return (
        <Link
          to="/cart"
          className="fixed bottom-0 right-0 z-[100] flex w-full items-center justify-center gap-2 bg-violet-700 p-4 text-lg text-white  lg:relative lg:rounded-full lg:px-4 lg:py-2 lg:text-base"
        >
          <AiFillTag />
          <p>در سبد خرید</p>
        </Link>
      );
    } else {
      return (
        <button
          className="fixed bottom-0 right-0 z-[100] flex w-full items-center justify-center gap-2 bg-gray-900 p-4 text-lg text-white hover:bg-violet-700 lg:relative lg:rounded-full lg:px-4 lg:py-2 lg:text-base"
          onClick={clickHandler}
        >
          <AiOutlineShoppingCart />
          <p>افزودن به سبد خرید</p>
        </button>
      );
    }
  };

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 px-6 py-0 text-lg text-gray-700 lg:w-3/4 lg:text-base">
        <div className="flex flex-col items-start gap-4">
          <img src={fastSubmit} alt={fastSubmit} className="w-[17rem]" />
          <div className="flex w-full items-center justify-start gap-2 text-base">
            <span className="h-[2px] w-[16%] bg-violet-700 lg:w-[26%]"></span>
            <p>ارسال سریع به تمام نقاط کشور</p>
            <span className="h-[2px] w-0 bg-violet-700 lg:w-[24%]"></span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center gap-2">
            <BsShop />
            فروشنده : حسین محمودی
          </div>
          <div className="flex items-center justify-center gap-2">
            <DiCodeigniter style={{ color: "#f97316" }} />
            18 ماه گارانتی شرکتی
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaRibbon style={{ color: "#eab308" }} />
            قابلیت خرید بیمه نامه
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p>قیمت : {product.price.toLocaleString("en")} تومان</p>
          {renderAddToCartButton()}
        </div>
      </div>
    </>
  );
};

export default Seller;