import { useCart } from "context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";

const HeaderOfCart = () => {
  const { state } = useCart();
  return (
    <div className="flex items-center gap-2 px-6">
      <FaShoppingCart style={{ transform: "scaleX(-1)" }} />
      <p>جمع کل : {state.total.toLocaleString("en")} تومان</p>
    </div>
  );
};

export default HeaderOfCart;
