import { FaCheckCircle, FaRibbon, FaSketch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CartButtonProduct = ({ product }) => {
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
          className="cursor-pointer text-gray-700"
          onClick={renderProductPage}
        >
          {product.title}
        </h4>
        <div className="flex w-full flex-col items-start justify-center gap-2 text-sm">
          <div className="flex items-center justify-start gap-2">
            <FaSketch style={{ color: "#60a5fa" }} />
            <p>ضمانت هفت روزه کالا</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaRibbon style={{ color: "#fbbf24" }} />
            <p>18 ماه گارانتی</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaCheckCircle style={{ color: "#166534" }} />
            <p>ارسال سریع</p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-1/2 flex-col items-end justify-center gap-3 text-sm">
        <img
          className="h-28 w-28 cursor-pointer hover:scale-105"
          src={product.imageURL}
          onClick={renderProductPage}
          alt=""
        />
        <p>{product.price.toLocaleString("en")} تومان</p>
      </div>
    </div>
  );
};

export default CartButtonProduct;
