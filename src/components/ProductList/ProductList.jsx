import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import { productsData } from "../../db";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const ProductList = () => {
  const [products, setProducts] = useState("");
  const [fade, setFade] = useState(0);
  useEffect(() => {
    setTimeout(() => setProducts(productsData), 300);
    setTimeout(() => setFade(1), 350);
  }, []);

  return (
    <div>
      {products ? (
        <div className={styles.productsBlock} style={{ opacity: fade }}>
          {products.map((p) => {
            return (
              <Product
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                imageURL={p.imageURL}
              />
            );
          })}
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default ProductList;
