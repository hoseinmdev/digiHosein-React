import { useCart } from "context/CartProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PurchaseSummary = () => {
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const continueToBuyHandler = () => {
    if (userInformation.islogin) {
      toast.success("به سفارش شما رسیدگی خواهد شد :)");
      dispatch({ type: "DELETE_ALL" });
      navigate("/");
    } else {
      toast.warn("لطفا ثبت نام کنید !");
      setTimeout(() => navigate("/sginUp"), 200);
    }
  };
  return (
    <div className="fixed bottom-0 right-0 z-[150] mt-6 flex w-full flex-row justify-center gap-4 rounded-none bg-white p-8 shadow-lg lg:relative lg:w-1/2 lg:flex-col lg:rounded-lg">
      <h3>قیمت کالا ها : {state.total.toLocaleString("en")} تومان</h3>
      <button
        className="flex w-11/12 items-center justify-center rounded-md bg-violet-700 px-4 py-2 text-base text-white lg:w-full lg:rounded-full"
        onClick={continueToBuyHandler}
      >
        به خرید ادامه بده
      </button>
    </div>
  );
};

export default PurchaseSummary;
