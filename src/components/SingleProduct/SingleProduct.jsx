import { useEffect, useRef, useState } from "react";
import ProductCheckout from "./ProductCheckout";
import ProductIntroduction from "./ProductIntroduction";
import ProductComments from "./ProductComments/ProductComments";
import ProductTechnicalCheck from "./ProductTechnicalCheck";
import BackToUpBtn from "../common/BackToUpBtn";
import SingleProductSkeleton from "./SingleProductSkeleton";
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
        <div
          ref={headerOfPage}
          className="flex w-full flex-col items-start justify-center gap-12 rounded-lg bg-white p-5"
        >
          <div className="flex w-full flex-col items-start justify-center gap-6 rounded-lg">
            <h2>{product.title}</h2>
            <div className="flex gap-8">
              <div
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-200 p-2"
                onClick={() =>
                  window.scrollTo({
                    top: userComments.current.offsetTop - 100,
                    behavior: "smooth",
                  })
                }
              >
                <span className="text-violet-700">
                  {product.comments.length}
                </span>
                نظر از سمت کاربران
              </div>
              <div
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-100 p-2 text-violet-700"
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
            <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:justify-between">
              <ProductIntroduction product={product} />
              <hr className="w-[1px]" />
              <ProductCheckout product={product} />
            </div>
          </div>
          <div ref={technicalCheckPart} className="w-full">
            <ProductTechnicalCheck product={product} />
          </div>
          <div ref={userComments} className="w-full">
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
      return <SingleProductSkeleton />;
    }
  };
  return renderSingleProduct();
};

export default SingleProduct;
