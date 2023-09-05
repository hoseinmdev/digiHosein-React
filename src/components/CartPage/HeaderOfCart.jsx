import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const HeaderOfCart = () => {
  const productsTotalPrice = useSelector((state) => state.cart.productsTotalPrice);
  return (
    <div className="flex items-center gap-2 px-6 dark:text-white/80">
      <FaShoppingCart style={{ transform: "scaleX(-1)" }} />
      <p>جمع کل : {productsTotalPrice.toLocaleString("en")} تومان</p>
    </div>
  );
};

export default HeaderOfCart;
