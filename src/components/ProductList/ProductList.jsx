import Product from "../ProductList/Product/Product";
import styles from "./ProductList.module.css";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import { useProducts } from "../../context/ProductsProvider";
import InsideSkeleton from "../Skeleton/InsideSkeleton";

const ProductList = () => {
  const [fade, setFade] = useState(0);
  const [products, setProducts] = useState(0);
  const { productState } = useProducts();

  useEffect(() => {
    setTimeout(() => setProducts(productState), 1500);
    setTimeout(() => setFade(1), 1510);
  }, []);

  const renderProducts = () => {
    if (products) {
      return (
        <div className={styles.productsBlock} style={{ opacity: fade }}>
          {productState.products.map((p) => {
            const product = {
              id: p.id,
              type: p.type,
              title: p.title,
              price: p.price,
              imageURL: p.imageURL,
              Specifications: p.Specifications,
              comments: p.comments,
              quantity: p.quantity,
              technicalCheck: p.technicalCheck,
              positivePoints: p.positivePoints,
              negativePoints: p.negativePoints,
            };
            return <Product key={p.id} product={product} />;
          })}
        </div>
      );
    }
    if (products === 0) {
      return (
        <div className={styles.productsBlock}>
          {productState.products.map((p) => {
            return (
              <Skeleton key={p.id} className={styles.productSkeleton}>
                <InsideSkeleton width={"40%"} height={"10rem"} radius={"8px"} />
                <InsideSkeleton
                  width={"85%"}
                  height={"1.5rem"}
                  radius={"30px"}
                />
                <InsideSkeleton
                  width={"75%"}
                  height={"1.5rem"}
                  radius={"30px"}
                />
                <InsideSkeleton
                  width={"55%"}
                  height={"1.5rem"}
                  radius={"30px"}
                />
              </Skeleton>
            );
          })}
        </div>
      );
    }
  };
  return renderProducts();
};

export default ProductList;
