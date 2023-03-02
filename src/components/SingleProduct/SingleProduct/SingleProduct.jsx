import styles from "./singleProduct.module.css";
import { useEffect, useRef, useState } from "react";
import ProductCheckout from "../ProductCheckout/ProductCheckout";
import ProductIntroduction from "../ProductIntroduction/ProductIntroduction";
import ProductComments from "../ProductComments/ProductComments";
import ProductTechnicalCheck from "../ProductTechnicalCheck/ProductTechnicalCheck";
import BackToUpBtn from "../../common/BackToUpBtn/BackToUpBtn";
import SingleProductSkeleton from "../SingleProductSkeleton/SingleProductSkeleton";
import { useProducts } from "context/ProductsProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const history = useLocation();
  const technicalCheckPart = useRef();
  const userComments = useRef();
  const headerOfPage = useRef();
  const [singleProduct, setSingleproduct] = useState(0);
  const [replyComment, setReplyComment] = useState(0);
  const { productState } = useProducts();
  const product = productState.allProducts.find((p) => p.id === history.state);

  useEffect(() => {
    setTimeout(() => setSingleproduct(1), 1500);
  }, []);

  const renderSingleProduct = () => {
    if (singleProduct) {
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
            <ProductComments
              product={product}
              replyComment={replyComment}
              setReplyComment={setReplyComment}
            />
          </div>
          <BackToUpBtn />
        </div>
      );
    }
    if (!singleProduct) {
      return (
        <div className={styles.productPage}>
          <SingleProductSkeleton key={1} />;
        </div>
      );
    }
  };
  return renderSingleProduct();
};

export default SingleProduct;
