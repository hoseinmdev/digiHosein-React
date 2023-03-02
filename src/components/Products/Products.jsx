import Product from "../Product/Product";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import { useProducts } from "../../context/ProductsProvider";

const Products = () => {
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
              <div key={p.id} className={styles.productSkeleton}>
                <Skeleton width={"40%"} height={"10rem"} radius={"8px"} />
                <Skeleton width={"85%"} height={"1.5rem"} radius={"30px"} />
                <Skeleton width={"75%"} height={"1.5rem"} radius={"30px"} />
                <Skeleton width={"55%"} height={"1.5rem"} radius={"30px"} />
              </div>
            );
          })}
        </div>
      );
    }
  };
  return renderProducts();
};

export default Products;
