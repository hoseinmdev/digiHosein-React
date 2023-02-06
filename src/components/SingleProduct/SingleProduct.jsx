import styles from "./singleProduct.module.css";
import { useRef } from "react";
import ProductCheckout from "./ProductCheckout/ProductCheckout";
import ProductIntroduction from "./ProductIntroduction/ProductIntroduction";
import ProductComments from "./ProductComments/ProductComments";
import ProductTechnicalCheck from "./ProductTechnicalCheck/ProductTechnicalCheck";
import BackToUpBtn from "../common/Toast/BackToUpBtn";

const SingleProduct = ({ product }) => {
  const technicalCheckPart = useRef();
  const userComments = useRef();
  const headerOfPage = useRef();

  return (
    <div ref={headerOfPage} className={styles.productPage}>
      <div className={styles.productBlock}>
        <h2>{product.title}</h2>
        <div className={styles.labelsBlock}>
          <div
            onClick={() =>
              window.scrollTo({
                top: userComments.current.offsetTop - 100,
                behavior: "smooth",
              })
            }
          >
            <span>{product.comments.length}</span>
            نظر از سمت کاربران
          </div>
          <div
            onClick={() => {
              window.scrollTo({
                top: technicalCheckPart.current.offsetTop - 100,
                behavior: "smooth",
              });
            }}
          >
            بررسی فنی
          </div>
        </div>
        <section>
          <ProductIntroduction product={product} />
          <hr />
          <ProductCheckout product={product} />
        </section>
      </div>
      <div ref={technicalCheckPart} style={{ width: "100%" }}>
        <ProductTechnicalCheck product={product} />
      </div>
      <div ref={userComments} style={{ width: "100%" }}>
        <ProductComments product={product} />
      </div>

      <BackToUpBtn />
    </div>
  );
};

export default SingleProduct;
