import { AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { FaRibbon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fastSubmit from "../../assets/images/esraleSari.png";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "redux/cartSlice";

const Seller = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد",{theme:"colored"});
    dispatch(addProductToCart(product));
  };
  const renderAddToCartButton = () => {
    const isInCart = cart.find((p) => p.id === product.id);
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
          className="fixed bottom-0 right-0 z-[100] flex w-full items-center justify-center gap-2 bg-gray-900 p-4 text-lg text-white dark:border-2 dark:border-violet-500 dark:bg-violet-500 lg:relative lg:rounded-full lg:px-4 lg:py-2 lg:text-base lg:hover:bg-violet-700 lg:dark:bg-transparent"
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
      <div className="flex w-full flex-col justify-center gap-6 px-6 py-0 text-lg text-gray-700 dark:text-white/60 lg:w-3/4 lg:text-base ">
        <div className="flex flex-col items-start gap-4">
          <img
            src={fastSubmit}
            alt={fastSubmit}
            className="w-[17rem] dark:hidden"
          />
          <div className="flex w-full items-center justify-start gap-2 text-base">
            <span className="h-[2px] w-[16%] bg-violet-700 dark:bg-violet-400 lg:w-[26%]"></span>
            <p className="font-EstedadFont">ارسال سریع به تمام نقاط کشور</p>
            <span className="h-[2px] w-0 bg-violet-700 dark:bg-violet-400 lg:w-[24%]"></span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <div className="flex items-center justify-center gap-2 font-EstedadFont">
            <BsShop />
            فروشنده : حسین محمودی
          </div>
          <div className="flex items-center justify-center gap-2 font-EstedadFont">
            <DiCodeigniter style={{ color: "#f97316" }} />
            18 ماه گارانتی شرکتی
          </div>
          <div className="flex items-center justify-center gap-2 font-EstedadFont">
            <FaRibbon style={{ color: "#eab308" }} />
            قابلیت خرید بیمه نامه
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <p>قیمت : {product.price.toLocaleString("en")} تومان</p>
          {renderAddToCartButton()}
        </div>
      </div>
    </>
  );
};

export default Seller;
