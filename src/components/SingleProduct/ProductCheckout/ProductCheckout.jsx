import {
  AiFillTag,
  AiOutlineClockCircle,
  AiOutlineDingding,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { FaRibbon, FaStudiovinari } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../../context/CartProvider";
import styles from "./productCheckout.module.css";
import fastSubmit from "../../../Accets/images/esraleSari.png";
const ProductCheckout = ({ product }) => {
  const { state, dispatch } = useCart();
  const clickHandler = () => {
    toast.success("به سبد خرید اضافه شد");
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
  const renderAddToCartButton = () => {
    const isInCart = state.cart.find((p) => p.id === product.id);
    if (isInCart) {
      return (
        <Link to="/cart" className={`${styles.productButton} ${styles.inCart}`}>
          <AiFillTag />
          <p>در سبد خرید</p>
        </Link>
      );
    } else {
      return (
        <button
          className={`${styles.productButton} ${styles.addToCart}`}
          onClick={clickHandler}
        >
          <AiOutlineShoppingCart style={{ transform: "scaleX(-1)" }} />
          <p>افزودن به سبد خرید</p>
        </button>
      );
    }
  };

  return (
    <>
      <div className={styles.productCheckout}>
        <section>
          <img src={fastSubmit} alt={fastSubmit} className={styles.fastSubmitImage}/>
          <div className={styles.fastSubmitText}>
            <span></span>
            <p>ارسال سریع به تمام نقاط کشور</p>
            <span></span>
          </div>
        </section>
        <section>
          <div>
            <BsShop />
            فروشنده : حسین محمودی
          </div>
          <div>
            <DiCodeigniter style={{ color: "#f97316" }} />
            18 ماه گارانتی شرکتی
          </div>
          <div>
            <FaRibbon style={{ color: "#eab308" }} />
            قابلیت خرید بیمه نامه
          </div>
        </section>
        <section>
          <p>قیمت : {product.price.toLocaleString("en")} تومان</p>
          {renderAddToCartButton()}
        </section>
      </div>
    </>
  );
};

export default ProductCheckout;
