import styles from "./EmptyCart.module.css";
import emptyCart from "../../../Accets/images/empty-shopping-trolley.png";
import { Link, NavLink } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className={styles.emptyCartBlock}>
      <img
        style={{ width: "13rem"}}
        src={emptyCart}
        alt="سبد شما خالی است"
      ></img>
      <h2 style={{ color: "#64748b" }}>سبد شما خالی است :(</h2>
      <Link to="/">
        <button className={styles.backToHomeBtn}>برو به صفحه اصلی</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
