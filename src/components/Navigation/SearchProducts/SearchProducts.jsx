import Product from "components/Product/Product";
import { useProducts } from "context/ProductsProvider";
import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import FoundProduct from "../FoundProduct/FoundProduct";
import styles from "./SearchProducts.module.css";
const SearchProducts = () => {
  const [searchBoxSelected, setSearchBoxSelected] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [productsFound, setProductsFound] = useState("");
  const { productState } = useProducts();

  const searchBoxSelectedHandler = () => {
    setSearchBoxSelected(!searchBoxSelected);
    setSearchInput("");
    setProductsFound("");
  };
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    const findedProducts = productState.allProducts.filter((p) =>
      p.title.toLowerCase().includes(e.target.value)
    );
    setProductsFound(findedProducts);
  };
  const renderBackdrop = () => {
    return (
      <div className={styles.backdrop} onClick={searchBoxSelectedHandler}></div>
    );
  };
  return (
    <>
      <div
        className={
          !searchBoxSelected ? styles.searchBox : styles.activeSearchBox
        }
        onClick={() => (!searchBoxSelected ? searchBoxSelectedHandler() : "")}
      >
        <FaSearch className={styles.searchIcon} />
        <input
          placeholder="محصول مورد نظرتان را جستجو کنید"
          value={searchInput}
          onChange={(e) => searchInputHandler(e)}
        />
      </div>
      {productsFound && (
        <div className={styles.productsContainer}>
          <span>
            <HiSquares2X2 />
            جستجو برای ...
            <p>{searchInput}</p>
          </span>
          {productsFound.length !== productState.allProducts.length ? (
            <div className={styles.products}>
              {productsFound.map((p) => {
                return (
                  <FoundProduct
                    key={p.id}
                    id={p.id}
                    imageURL={p.imageURL}
                    title={p.title}
                  />
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {searchBoxSelected ? renderBackdrop() : ""}
    </>
  );
};

export default SearchProducts;
