import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
import { RiChatDeleteFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "redux/cartSlice";

const Product = ({ product }) => {
  const { id, title, price, imageURL } = product;
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const isInCart = cart.find((p) => p.id === id);
  const history = useNavigate();

  const clickHandler = () => {
    dispatch(addProductToCart(product));
    toast.success("به سبد خرید اضافه شد", { theme: "colored"});
  };
  const incrementHandler = () => {
    dispatch(incrementProduct(product));
  };
  const decrementHandler = () => {
    if (isInCart.quantity === 1) {
      toast.error("از سبد خرید حذف شد", {
        icon: <RiChatDeleteFill />,
        theme:"colored",
      });
      dispatch(deleteFromCart(product));
    } else dispatch(decrementProduct(product));
  };
  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      },
    );
  };
  const renderAddToCartButton = () => {
    if (isInCart) {
      return (
        <div className="flex w-full items-center justify-center gap-1">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white lg:hover:bg-violet-700"
            onClick={incrementHandler}
          >
            +
          </button>
          <Link
            to="/cart"
            className="flex h-9 w-9/12 items-center 
            justify-between rounded-xl bg-violet-600 p-2 text-sm text-white"
          >
            <div className="flex w-full items-center justify-evenly">
              <AiFillTag /> در سبد خرید
              <p className="text-sm">{isInCart.quantity}</p>
            </div>
          </Link>
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white lg:hover:bg-violet-700"
            onClick={decrementHandler}
          >
            {isInCart.quantity === 1 ? (
              <FaTrash className="h-1/2 w-1/2" />
            ) : (
              "-"
            )}
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="flex  h-9 w-11/12 items-center justify-around rounded-xl bg-slate-800 p-2 text-sm text-white dark:border-2 dark:text-white/70 dark:border-violet-700"
          onClick={clickHandler}
        >
          <AiOutlineShoppingCart />
          <p>افزودن به سبد خرید</p>
        </button>
      );
    }
  };
  return (
    <div className="relative flex h-[17.5rem] w-[12.5rem] flex-col items-center justify-end gap-4 rounded-xl bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/80 lg:h-[18.5rem]">
      <div className="outline-3 absolute left-auto right-auto top-[-2rem] w-10/12 rounded-full bg-white p-2 shadow-lg outline-gray-200 dark:bg-gray-700 dark:outline dark:outline-offset-1 dark:outline-violet-500/80 lg:top-[-2rem] lg:w-11/12 lg:cursor-pointer">
        <img
          className=" scale-90"
          src={imageURL}
          alt={title}
          onClick={renderProductPage}
        />
      </div>
      <p
        className="w-full text-center font-EstedadFont text-[0.85rem] lg:cursor-pointer"
        onClick={renderProductPage}
      >
        {title.length > 24 ? title.slice(0, 24) + "..." : title}
      </p>
      <div className="flex w-full flex-col items-center justify-end gap-4">
        {renderAddToCartButton()}
        <p className="text-base">{price.toLocaleString("en")} تومان</p>
      </div>
    </div>
  );
};

export default Product;
