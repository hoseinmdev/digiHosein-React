import { useLocation } from "react-router-dom";
import SiteLayout from "../layout/SiteLayout";
import { useRef, useState } from "react";
import { useProducts } from "context/ProductsProvider";
import Introduction from "components/SingleProductPage/Introduction";
import Seller from "components/SingleProductPage/Seller";
import TechnicalCheck from "components/SingleProductPage/TechnicalCheck";
import UserComments from "components/SingleProductPage/UserComments";
import BackToUp from "components/common/BackToUpBtn";
import SingleProductSkeleton from "components/SingleProductPage/SingleProductSkeleton";
import Badge from "components/SingleProductPage/Badge";
const SingleProductPage = () => {
  const history = useLocation();
  const technicalCheckPart = useRef();
  const userCommentsPart = useRef();
  const [show, setShow] = useState(0);
  const { productState } = useProducts();
  const product = productState.allProducts.find((p) => p.id === history.state);
  setTimeout(() => setShow(1), 1500);

  const renderSingleProduct = () => {
    if (show) {
      return (
        <div className="flex w-full flex-col items-start justify-center gap-12 rounded-lg bg-white p-5">
          <div className="flex w-full flex-col items-start justify-center gap-6 rounded-lg">
            <h2>{product.title}</h2>
            <div className=" flex items-center justify-center gap-3">
              <Badge
                refrens={userCommentsPart}
                title={`${product.comments.length} نظر از سمت کاربران`}
              />
              <Badge refrens={technicalCheckPart} title={"بررسی فنی"} />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:justify-between">
              <Introduction product={product} />
              <hr className="w-[1px]" />
              <Seller product={product} />
            </div>
          </div>
          <div ref={technicalCheckPart} className="w-full">
            <TechnicalCheck product={product} />
          </div>
          <div ref={userCommentsPart} className="w-full">
            <UserComments product={product} />
          </div>
          <BackToUp />
        </div>
      );
    } else {
      return <SingleProductSkeleton />;
    }
  };
  return <SiteLayout>{renderSingleProduct()}</SiteLayout>;
};

export default SingleProductPage;
