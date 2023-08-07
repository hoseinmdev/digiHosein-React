import Product from "./Product";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartProvider";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CartProducts = () => {
  const { state, dispatch } = useCart();
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));

  const navigate = useNavigate();
  const continueToBuyHandler = () => {
    if (userInformation.islogin) {
      toast.success("به سفارش شما رسیدگی خواهد شد :)");
      dispatch({ type: "DELETE_ALL" });
      navigate("/");
    } else {
      navigate("/sginUp");
    }
  };
  const renderProducts = () => {
    if (state.cart.length !== 0) {
      return (
        <div className=" mt-4 flex min-h-[33rem] w-11/12 flex-col items-start lg:mr-0 lg:mt-0">
          <div className="flex items-center gap-4">
            <FaShoppingCart style={{ transform: "scaleX(-1)" }} />
            <h2>سبد خرید شما</h2>
            <p>جمع کل : {state.total.toLocaleString("en")} تومان</p>
          </div>
          <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-4 overflow-auto rounded-lg p-4">
              {state.cart.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
            <div className="fixed bottom-0 right-0 z-[150] mt-6 flex w-full flex-row justify-center gap-4 rounded-none bg-white p-8 shadow-lg lg:relative lg:w-1/2 lg:flex-col lg:rounded-lg">
              <h3>قیمت کالا ها : {state.total.toLocaleString("en")} تومان</h3>
              <button
                className="flex w-11/12 items-center justify-center rounded-md bg-violet-700 px-4 py-2 text-base text-white lg:w-full lg:rounded-full"
                onClick={continueToBuyHandler}
              >
                به خرید ادامه بده
              </button>
            </div>
          </div>
        </div>
      );
    } else return <EmptyCart />;
  };
  return renderProducts();
};

export default CartProducts;
