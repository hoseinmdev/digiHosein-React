import { useCart } from "context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import CartButtonProduct from "./CartButtonProduct";
import { BsArrowLeftRight } from "react-icons/bs";
const CartButton = () => {
  const { state } = useCart();
  const navigate = useNavigate();
  const goToCartPage = () => {
    navigate("/cart");
  };
  const renderShowProduct = () => {
    if (state.cart.length !== 0) {
      return (
        <div className="absolute left-0 top-[50%] flex w-[27rem] scale-0 flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg group-hover/cartBtn:scale-100">
          <div className="flex w-full items-center justify-between gap-8 rounded-md bg-gray-100 p-2 text-sm text-black">
            <div className="flex items-center justify-center gap-2">
              <p>سبد خرید شما</p>
              <p className="text-xs text-gray-600">
                {state.cart.length} عدد کالا
              </p>
            </div>
            <Link
              className="flex items-center justify-center gap-1 text-indigo-600"
              to="/cart"
            >
              مشاهده سبد خرید
              <BiLeftArrowAlt />
            </Link>
          </div>
          <div className="flex h-full max-h-[24rem] w-full flex-col items-center justify-start gap-4 overflow-auto p-3 py-3">
            {state.cart.map((product) => {
              return <CartButtonProduct key={product.id} product={product} />;
            })}
          </div>
          <button
            className="flex h-full w-full items-center justify-around rounded-lg bg-violet-700 px-4 py-2 text-white hover:bg-violet-600"
            onClick={goToCartPage}
          >
            ورود و ثبت سفارش
            <BsArrowLeftRight />
            <p>{state.total.toLocaleString("en")} تومان</p>
          </button>
        </div>
      );
    } else {
      return "";
    }
  };
  return (
    <div className="group/cartBtn">
      <Link to="/cart">
        <button className="relative flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-[0.6rem] text-xl text-gray-700">
          <FaShoppingCart />
          <span className="absolute right-0 top-0 m-1 flex  w-4 items-center justify-center rounded-lg bg-violet-700 text-xs text-white">
            {state.cart.length}
          </span>
        </button>
      </Link>
      {renderShowProduct()}
    </div>
  );
};

export default CartButton;
