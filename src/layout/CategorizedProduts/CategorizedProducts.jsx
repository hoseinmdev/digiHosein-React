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
import { useMediaPredicate } from "react-media-hook";
import Product2 from "components/Product2/Product2";
import BackToUp from "components/common/BackToUpBtn/BackToUpBtn";
import { AiOutlineFilter } from "react-icons/ai";
import FilterOptionsMobile from "./FilterOptionsMobile/FilterOptionsMobile";
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
  const [showMobileFilters, setShowMobileFilters] = useState(0);
  const lowerThan1024 = useMediaPredicate("(max-width: 1024px)");

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
    const finalProducts = [];
    // products on current category
    const allProducts = productState.allProducts.filter(
      (p) => p.category === currentCategory
    );

    const filtersObject = {};
    Object.keys(serializeFormQuery()).forEach((key) => {
      const [filterKey, filterValue] = key.split("_");
      const settledFilterValue = filtersObject[filterKey];
      if (settledFilterValue) {
        filtersObject[filterKey] = [...settledFilterValue, filterValue];
      } else {
        filtersObject[filterKey] = [filterValue];
      }
    });
    let filteredProducts = allProducts.filter((product) => {
      return Object.entries(filtersObject).every(([prop, find]) => {
        const convertStrToNumber = find.map((num) => parseInt(num));
        return convertStrToNumber.includes(product[prop]);
      });
    });
    new Set(filteredProducts).forEach((item) => {
      finalProducts.push(item);
    });

    if (searchParams.toString().length !== 0) {
      setProducts(0);
      setTimeout(() => setProducts(finalProducts), 500);
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
  const renderMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
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
            camera: p.camera,
            battery: p.battery,
            price: p.price,
            imageURL: p.imageURL,
            Specifications: p.Specifications,
            comments: p.comments,
            quantity: p.quantity,
            technicalCheck: p.technicalCheck,
            positivePoints: p.positivePoints,
            negativePoints: p.negativePoints,
            screen: p.screen,
          };
          return (
            <div key={index}>
              {lowerThan1024 ? (
                <Product2 key={index} product={product} />
              ) : (
                <Product key={index} product={product} />
              )}
            </div>
          );
        });
      } else {
        return renderNotFoundProduct();
      }
    } else {
      return createEmptyArray(8).map((p, index) => {
        return (
          <>
            <div key={p} className={styles.productSkeleton}>
              <Skeleton width={"5.5rem"} height={"10rem"} radius={"8px"} />
              <Skeleton width={"10rem"} height={"1.5rem"} radius={"30px"} />
              <Skeleton width={"8rem"} height={"1.5rem"} radius={"30px"} />
              <Skeleton width={"6rem"} height={"1.5rem"} radius={"30px"} />
            </div>
            <div key={index} className={styles.productSkeletonMobile}>
              <Skeleton width={"8rem"} height={"1rem"} radius={"30px"} />
              <div className={styles.downOfSkeletonMobile}>
                <div className={styles.imageSkeletonMobile}>
                  <Skeleton width={"4rem"} height={"7rem"} radius={"8px"} />
                </div>
                <div className={styles.infoAndPriceSkeletonMobile}>
                  <Skeleton width={"9rem"} height={"4rem"} radius={"5px"} />
                  <Skeleton width={"6rem"} height={"1rem"} radius={"30px"} />
                </div>
              </div>
            </div>
          </>
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
        {showMobileFilters ? (
          <FilterOptionsMobile
            setShowMobileFilters={setShowMobileFilters}
            renderFilters={renderFilters}
            renderDeleteFiltersBtn={renderDeleteFiltersBtn}
          />
        ) : (
          ""
        )}
        <div className={styles.filterOptionsContainer}>
          <div className={styles.filterOptionsTitle}>
            <h3>فیلتر ها</h3>
            {renderDeleteFiltersBtn()}
          </div>
          {renderFilters()}
        </div>
        <div className={styles.filterOptionsMobile}>
          <span
            className={styles.filterButtonMobile}
            onClick={renderMobileFilters}
          >
            <AiOutlineFilter />
          </span>
        </div>
        <div className={styles.productsContainer}>
          {renderProductSortBy()}
          <div className={styles.products}>{renderProducts()}</div>
        </div>
      </div>
      <BackToUp />
    </SiteLayout>
  );
};

export default CategorizedProducts;
