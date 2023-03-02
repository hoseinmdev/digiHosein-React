import styles from "./CategorizedProducts.module.css";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";
import { useEffect, useState } from "react";
import { RiFilterOffFill } from "react-icons/ri";
import { useProducts } from "context/ProductsProvider";
import Product from "components/Product/Product";
import { useParams, useSearchParams } from "react-router-dom";
import SiteLayout from "layout/SiteLayout/SiteLayout";
import Skeleton from "components/Skeleton/Skeleton";
import createEmptyArray from "utils/createEmptyArray";
const CategorizedProducts = () => {
  const generateFiltersState = () => {
    const filters = {};
    productState.filters.phones.forEach((p) => {
      filters[p.key] = false;
    });
    return filters;
  };
  const serializeFormQuery = () => {
    const allParams = {};
    for (const entry of searchParams.entries()) {
      const [key, value] = entry;
      allParams[key] = value;
    }
    return allParams;
  };
  const { productState } = useProducts();
  const [showFilters, setShowFilters] = useState(generateFiltersState);
  const currentCategory = useParams().category;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [producsForFilter, setProductsForFilter] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const allParams = serializeFormQuery();

  useEffect(() => {
    const products = productState.allProducts.filter(
      (p) => p.category === currentCategory
    );
    setProducts(0);
    setProductsForFilter(0);
    setCategory(0);
    setTimeout(() => {
      setCategory(currentCategory);
      setProducts(products);
      setProductsForFilter(products);
    }, 1000);
  }, [currentCategory]);

  useEffect(() => {
    const allKeys = Object.keys(allParams);
    const products = productState.allProducts.filter(
      (p) => p.category === currentCategory
    );
    if (allKeys.length !== 0) {
      allKeys.map((key) => {
        const finalKey = key.split("_");
        const newProducts = producsForFilter.filter(
          (p) => p[finalKey[0]] === parseInt(finalKey[1])
        );
      setProductsForFilter(0);
      setTimeout(() => setProductsForFilter(newProducts), 500);
      });
    } else {
      setProductsForFilter(0);
      setTimeout(() => setProductsForFilter(products), 1000);
    }
  }, [searchParams]);

  const toggleShowFilterOptionHandler = (key) => {
    setShowFilters({ ...showFilters, [key]: !showFilters[key] });
  };
  const checkBoxHandler = (e, optionKey) => {
    if (e.target.checked) {
      setSearchParams({ ...allParams, [optionKey]: true });
    } else {
      const newParams = { ...allParams };
      delete newParams[optionKey];
      setSearchParams(newParams);
    }
  };
  const renderFilters = () => {
    if (category) {
      return productState.filters[category].map((option) => {
        return (
          <div key={option.key} className={styles.filterOption}>
            <span
              className={styles.option}
              onClick={() => toggleShowFilterOptionHandler(option.key)}
            >
              {showFilters[option.key] ? (
                <p className={styles.activeOption}>
                  {option.title} <ImArrowUp2 />
                </p>
              ) : (
                <>
                  {option.title} <ImArrowDown2 />
                </>
              )}
            </span>
            <span
              className={styles.optionsContainer}
              style={{ display: showFilters[option.key] ? "flex" : "none" }}
            >
              {option.options.map((item) => {
                return (
                  <label key={item.title}>
                    <input
                      type="checkbox"
                      onChange={(e) => checkBoxHandler(e, item.key)}
                    />
                    {item.title}
                  </label>
                );
              })}
            </span>
          </div>
        );
      });
    } else {
      return createEmptyArray(7).map((p, index) => {
        return (
          <Skeleton
            key={index}
            width={"100%"}
            height={"2rem"}
            radius={"30px"}
          />
        );
      });
    }
  };
  const renderProducts = () => {
    if (producsForFilter) {
      return producsForFilter.map((p) => {
        const product = {
          id: p.id,
          category: p.category,
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
      });
    } else {
      return createEmptyArray(8).map((p, index) => {
        return (
          <div key={index} className={styles.productSkeleton}>
            <Skeleton width={"5.5rem"} height={"10rem"} radius={"8px"} />
            <Skeleton width={"10rem"} height={"1.5rem"} radius={"30px"} />
            <Skeleton width={"8rem"} height={"1.5rem"} radius={"30px"} />
            <Skeleton width={"6rem"} height={"1.5rem"} radius={"30px"} />
          </div>
        );
      });
    }
  };
  return (
    <SiteLayout>
      <div className={styles.allContentContainer}>
        <div className={styles.filterOptionsContainer}>
          <div className={styles.filterOptionsTitle}>
            <h3>فیلتر ها</h3>
            <button>
              حذف فیلتر ها <RiFilterOffFill />
            </button>
          </div>
          {renderFilters()}
        </div>
        <div className={styles.productsContainer}>{renderProducts()}</div>
      </div>
    </SiteLayout>
  );
};

export default CategorizedProducts;
