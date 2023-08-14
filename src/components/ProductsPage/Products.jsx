import { useMediaPredicate } from "react-media-hook";
import createEmptyArray from "utils/createEmptyArray";
import NotFoundProduct from "./NotFoundProduct";

const { default: Product } = require("components/common/Product");
const { default: Skeleton } = require("components/common/Skeleton");
const { default: MobileProduct } = require("./MobileProduct");

const Products = ({ products }) => {
  const lowerThan1024 = useMediaPredicate("(max-width: 1024px)");
  const renderSkeleton = () => {
    return createEmptyArray(8).map(() => (
      <>
        <div className="hidden h-72 w-48 flex-col items-center justify-evenly rounded-xl border border-gray-300 lg:flex">
          <Skeleton width={"5.5rem"} height={"10rem"} radius={"8px"} />
          <Skeleton width={"10rem"} height={"1.5rem"} radius={"30px"} />
          <Skeleton width={"8rem"} height={"1.5rem"} radius={"30px"} />
          <Skeleton width={"6rem"} height={"1.5rem"} radius={"30px"} />
        </div>
        <div className="flex h-40 w-full flex-col items-start justify-between rounded-lg border border-gray-300 p-2 lg:hidden">
          <Skeleton width={"8rem"} height={"1rem"} radius={"30px"} />
          <div className="flex w-full items-center justify-between">
            <div className="mr-6">
              <Skeleton width={"4rem"} height={"7rem"} radius={"8px"} />
            </div>
            <div className="flex flex-col items-end justify-center gap-4">
              <Skeleton width={"9rem"} height={"4rem"} radius={"5px"} />
              <Skeleton width={"6rem"} height={"1rem"} radius={"30px"} />
            </div>
          </div>
        </div>
      </>
    ));
  };

  if (products) {
    if (products.length !== 0) {
      return products.map((product, index) => {
        return lowerThan1024 ? (
          <MobileProduct key={index} product={product} />
        ) : (
          <Product key={index} product={product} />
        );
      });
    } else return <NotFoundProduct />;
  } else return renderSkeleton();
};
export default Products