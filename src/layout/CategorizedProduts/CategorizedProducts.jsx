import styles from "./CategorizedProducts.module.css";
import notFound from "../../Accets/images/notFoundProduct.png";
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
  const currentCategory = useParams().category;
  const [category, setCategory] = useState();
  const [showFilters, setShowFilters] = useState(generateFiltersState);
  const [products, setProducts] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const allProducts = productState.allProducts.filter(
      (p) => p.category === currentCategory
    );
    if (searchParams.toString().length === 0) {
      setProducts(0);
      setTimeout(() => setProducts(allProducts), 600);
    }
    setCategory(0);
    setTimeout(() => setCategory(currentCategory), 600);
  }, [currentCategory]);

  useEffect(() => {
    const allProducts = productState.allProducts.filter(
      (p) => p.category === currentCategory
    );
    const filteredProducts = Object.keys(serializeFormQuery())
      .map((key) => {
        const finalKey = key.split("_");
        const filteredProducts = allProducts.filter(
          (p) => p[finalKey[0]] === parseInt(finalKey[1])
        );
        return filteredProducts;
      })
      .flat(1);
    if (searchParams.toString().length !== 0) {
      setProducts(0);
      setTimeout(() => setProducts(filteredProducts), 500);
    } else {
      setProducts(0);
      setTimeout(() => setProducts(allProducts), 600);
    }
  }, [searchParams]);

  const renderDeleteFiltersBtn = () => {
    return (
      <button
        onClick={() => setSearchParams({})}
        className={
          searchParams.toString().length === 0
            ? styles.deleteFiltersBtn
            : styles.ActiveDeleteFiltersBtn
        }
      >
        حذف فیلتر ها <RiFilterOffFill />
      </button>
    );
  };
  const toggleShowFilterOptionHandler = (key) => {
    setShowFilters({ ...showFilters, [key]: !showFilters[key] });
  };
  const checkBoxHandler = (e, optionKey) => {
    const allParams = serializeFormQuery();
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
                const checked = Object.keys(serializeFormQuery()).find(
                  (o) => o === item.key
                );
                return (
                  <label key={item.title}>
                    <input
                      type="checkbox"
                      checked={checked ? true : false}
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
  const renderNotFoundProduct = () => {
    return (
      <div className={styles.notFoundProductContainer}>
        <img src={notFound} alt="محصولی یافت نشد" />
        <h1>محصولی یافت نشد :(</h1>
      </div>
    );
  };
  const renderProducts = () => {
    if (products) {
      if (products.length !== 0) {
        return products.map((p, index) => {
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
          return <Product key={index} product={product} />;
        });
      } else {
        return renderNotFoundProduct();
      }
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
  const renderProductSortBy = () => {
    if (category) {
      return (
        <div className={styles.productsSortByContainer}>
          <div>
            <span>ترتیب :</span>
          </div>
          <div className={styles.porductsSortByOptions}>
            <span>پرفروش ترین</span>
            <span>کمترین قیمت</span>
            <span>بیشترین قیمت</span>
            <span>جدیدترین</span>
          </div>
          <div>
            {products ? (
              <span>تعداد محصولات : {products.length}</span>
            ) : (
              <span className={styles.productsCounter}>
                درحال جستجو :
                <Skeleton width={"2rem"} height={"1rem"} radius={"30px"} />
              </span>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.porductsSortByOptions} style={{ gap: "1.5rem" }}>
          {createEmptyArray(6).map((p, index) => {
            return (
              <Skeleton
                key={index}
                width={"5rem"}
                height={"1.8rem"}
                radius={"8px"}
              />
            );
          })}
        </div>
      );
    }
  };
  return (
    <SiteLayout>
      <div className={styles.allContentContainer}>
        <div className={styles.filterOptionsContainer}>
          <div className={styles.filterOptionsTitle}>
            <h3>فیلتر ها</h3>
            {renderDeleteFiltersBtn()}
          </div>
          {renderFilters()}
        </div>
        <div className={styles.productsContainer}>
          {renderProductSortBy()}
          <div className={styles.products}>{renderProducts()}</div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default CategorizedProducts;
