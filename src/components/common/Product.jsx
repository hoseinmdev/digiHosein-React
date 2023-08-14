import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartProvider";
import { AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
import { RiChatDeleteFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Product = ({ product }) => {
  const { id, title, price, imageURL } = product;
  const { state, dispatch } = useCart();
  const isInCart = state.cart.find((p) => p.id === id);
  const history = useNavigate();
  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد");
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", price: price, id: id });
  };
  const decreaseHandler = () => {
    if (isInCart.quantity === 1) {
      toast.error("محصول حذف شد", {
        icon: <RiChatDeleteFill />,
        bodyClassName: "text-red-700",
        progressClassName: "bg-red-700",
      });
      dispatch({ type: "DELETE", price: price, id: id });
    } else {
      dispatch({ type: "DECREASE", price: price, id: id });
    }
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
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-violet-700"
            onClick={increaseHandler}
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
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-violet-700"
            onClick={decreaseHandler}
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
          className="flex h-9 w-11/12 items-center justify-around rounded-xl bg-slate-800 p-2 text-sm text-white"
          onClick={clickHandler}
        >
          <AiOutlineShoppingCart />
          <p>افزودن به سبد خرید</p>
        </button>
      );
    }
  };
  return (
    <div className="flex h-[22.5rem] w-[12.5rem] flex-col items-center justify-between gap-4 overflow-hidden rounded-xl bg-white p-2 shadow-lg">
      <img
        className="cursor-pointer"
        src={imageURL}
        alt={title}
        onClick={renderProductPage}
      />
      <p
        className="w-full cursor-pointer text-base"
        onClick={renderProductPage}
      >
        {title}
      </p>
      <div className="flex h-full w-full flex-col items-center justify-end gap-4">
        {renderAddToCartButton()}
        <p className="text-base">{price.toLocaleString("en")} تومان</p>
      </div>
    </div>
  );
};

export default Product;
