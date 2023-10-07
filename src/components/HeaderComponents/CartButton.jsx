import { FaShoppingCart } from "react-icons/fa";
import { FaCheckCircle, FaRibbon, FaSketch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cart = useSelector((state) => state.cart.products);
  return (
    <div className="group/cartBtn">
      <Link to="/cart">
        <button className="relative flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-[0.6rem] text-xl text-gray-700 dark:border-2 dark:border-violet-500 dark:bg-transparent dark:text-white">
          <FaShoppingCart />
          <span className="absolute right-0 top-0 m-1 flex  w-4 items-center justify-center rounded-lg bg-violet-700 text-xs text-white dark:bg-violet-700 dark:text-white">
            {cart.length}
          </span>
        </button>
      </Link>
      {cart.length !== 0 && <ShowProducts />}
    </div>
  );
};

const ShowProducts = () => {
  const cart = useSelector((state) => state.cart.products);
  const productsTotalPrice = useSelector(
    (state) => state.cart.productsTotalPrice,
  );
  const navigate = useNavigate();
  return (
    <div className="absolute left-0 top-[50%] flex w-[27rem] scale-0 flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white dark:bg-gray-700 dark:border-none dark:text-white/80 p-4 shadow-lg">
      <div className="flex w-full items-center justify-between gap-8 rounded-md bg-gray-100 p-2 text-sm text-black dark:bg-gray-800 dark:text-white/80">
        <div className="flex items-center justify-center gap-2">
          <p>سبد خرید شما</p>
          <p className="text-xs text-gray-600 dark:text-white/80">{cart.length} عدد کالا</p>
        </div>
        <Link
          className="flex items-center justify-center gap-1 text-violet-600 dark:text-violet-400"
          to="/cart"
        >
          مشاهده سبد خرید
          <BiLeftArrowAlt />
        </Link>
      </div>
      <div className="flex h-full max-h-[24rem] w-full flex-col items-center justify-start gap-4 overflow-auto p-3 py-3">
        {cart.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button
        className="flex h-full w-full items-center justify-around rounded-lg bg-violet-700 px-4 py-2 text-white lg:hover:bg-violet-600"
        onClick={() => navigate("/cart")}
      >
        ورود و ثبت سفارش
        <BsArrowLeftRight />
        <p>{productsTotalPrice.toLocaleString("en")} تومان</p>
      </button>
    </div>
  );
};
const Product = ({ product }) => {
  const history = useNavigate();
  const renderProductPage = () => {
    history(
      { pathname: `/product/${product.id}` },
      {
        state: product.id,
      },
    );
  };
  return (
    <div className="flex h-36 w-full items-start justify-center border-b border-violet-100 pb-2">
      <div className="flex h-full w-full flex-col items-start justify-around">
        <h4
          className="text-gray-700 lg:cursor-pointer dark:text-white/80"
          onClick={renderProductPage}
        >
          {product.title}
        </h4>
        <div className="flex w-full flex-col items-start justify-center gap-2 text-sm">
          <div className="flex items-center justify-start gap-2">
            <FaSketch className=" text-sky-500" />
            <p>ضمانت هفت روزه کالا</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaRibbon className=" text-yellow-400" />
            <p>18 ماه گارانتی</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaCheckCircle className=" text-green-500" />
            <p>ارسال سریع</p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-1/2 flex-col items-end justify-center gap-3 text-sm">
        <img
          className="h-28 w-28 lg:cursor-pointer lg:hover:scale-105"
          src={product.imageURL}
          onClick={renderProductPage}
          alt=""
        />
        <p>{product.price.toLocaleString("en")} تومان</p>
      </div>
    </div>
  );
};

export default CartButton;
