import { Link } from "react-router-dom";
import page404 from "../../Accets/images/page404.avif";
import styles from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <img src={page404} />
      <Link to="/">
        <button>بازگشت به فروشگاه دیجی حسین</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
