import notFound from "../Accets/images/notFoundProduct.png";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";
import { useEffect, useState } from "react";
import { RiFilterOffFill } from "react-icons/ri";
import { useProducts } from "context/ProductsProvider";
import Product from "components/Product";
import { useParams, useSearchParams } from "react-router-dom";
import SiteLayout from "layout/SiteLayout";
import Skeleton from "components/Skeleton";
import createEmptyArray from "utils/createEmptyArray";
import { useMediaPredicate } from "react-media-hook";
import Product2 from "components/mobile/ProductMobile";
import BackToUp from "components/common/BackToUpBtn";
import { AiOutlineFilter } from "react-icons/ai";
import FilterOptionsMobile from "./FilterOptionsMobile";
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
      (p) => p.category === currentCategory,
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
      (p) => p.category === currentCategory,
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
    // console.log(filtersObject);
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
            ? "flex items-center justify-center gap-2 rounded-2xl bg-gray-300 p-2 text-white"
            : "flex items-center justify-center gap-2 rounded-2xl bg-red-500 p-2 text-white"
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
          <div
            key={option.key}
            className="flex w-full flex-col gap-4 rounded-lg bg-gray-100 px-4 py-2 text-base"
          >
            <span
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleShowFilterOptionHandler(option.key)}
            >
              {showFilters[option.key] ? (
                <p className="flex w-full cursor-pointer items-center justify-between text-violet-700">
                  {option.title} <ImArrowUp2 />
                </p>
              ) : (
                <>
                  {option.title} <ImArrowDown2 />
                </>
              )}
            </span>
            <span
              className={`flex flex-col items-center justify-start gap-1 ${
                showFilters[option.key] ? "flex" : "hidden"
              }`}
            >
              {option.options.map((item) => {
                const checked = Object.keys(serializeFormQuery()).find(
                  (o) => o === item.key,
                );
                return (
                  <label
                    className="flex w-full items-center justify-start gap-2"
                    key={item.title}
                  >
                    <input
                      className="flex h-3 w-3 items-center justify-center rounded-2xl p-1"
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
      <div className="mt-10 flex w-[60rem] flex-col items-center justify-center gap-2 text-gray-600">
        <img className="w-52" src={notFound} alt="محصولی یافت نشد" />
        <h1>محصولی یافت نشد :(</h1>
      </div>
    );
  };
  const renderProducts = () => {
    if (products) {
      if (products.length !== 0) {
        return products.map((product, index) => {
          return lowerThan1024 ? (
            <Product2 key={index} product={product} />
          ) : (
            <Product key={index} product={product} />
          );
        });
      } else {
        return renderNotFoundProduct();
      }
    } else {
      return createEmptyArray(8).map((p, index) => {
        return (
          <>
            <div
              key={p}
              className="hidden h-72 w-48 flex-col items-center justify-evenly rounded-xl border border-gray-300 lg:flex"
            >
              <Skeleton width={"5.5rem"} height={"10rem"} radius={"8px"} />
              <Skeleton width={"10rem"} height={"1.5rem"} radius={"30px"} />
              <Skeleton width={"8rem"} height={"1.5rem"} radius={"30px"} />
              <Skeleton width={"6rem"} height={"1.5rem"} radius={"30px"} />
            </div>
            <div
              key={index}
              className="flex h-40 w-full flex-col items-start justify-between rounded-lg border border-gray-300 p-2 lg:hidden"
            >
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
        );
      });
    }
  };
  const renderProductSortBy = () => {
    if (category) {
      return (
        <div className="flex w-full items-center justify-between text-base lg:justify-start lg:gap-6">
          <p className="hidden lg:block">ترتیب :</p>
          <div className="hidden items-center justify-center gap-2 lg:flex">
            <span className="cursor-pointer border-r border-gray-300 px-4 py-1 font-bold text-violet-700">
              پرفروش ترین
            </span>
            <span className="cursor-pointer border-r border-gray-300 px-4 py-1 font-bold text-violet-700">
              کمترین قیمت
            </span>
            <span className="cursor-pointer border-r border-gray-300 px-4 py-1 font-bold text-violet-700">
              بیشترین قیمت
            </span>
            <span className="cursor-pointer rounded-lg bg-violet-100 px-4 py-1 font-bold text-violet-700">
              جدیدترین
            </span>
          </div>
          <div>
            {products ? (
              <span className="cursor-pointer rounded-lg bg-violet-100 px-4 py-1 font-bold text-violet-700">
                تعداد محصولات : {products.length}
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                درحال جستجو :
                <Skeleton width={"2rem"} height={"1rem"} radius={"30px"} />
              </span>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className={`hidden items-center justify-center gap-6 lg:flex`}>
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
      <div className="flex w-full flex-col items-start justify-center gap-4 p-4 lg:flex-row lg:justify-between">
        {showMobileFilters ? (
          <FilterOptionsMobile
            setShowMobileFilters={setShowMobileFilters}
            renderFilters={renderFilters}
            renderDeleteFiltersBtn={renderDeleteFiltersBtn}
          />
        ) : (
          ""
        )}
        <div className="sticky top-[160px] mr-4 hidden w-72 flex-col items-start justify-center gap-2 rounded-2xl bg-white p-2 shadow-lg lg:flex">
          <div className="flex w-full items-center justify-between p-2 text-base text-gray-600">
            <h3>فیلتر ها</h3>
            {renderDeleteFiltersBtn()}
          </div>
          {renderFilters()}
        </div>
        <div className="flex w-full items-center justify-between p-2 text-2xl text-gray-600 lg:hidden">
          <span
            className="flex items-center justify-center rounded-full border-2 border-gray-300 p-2 text-violet-600"
            onClick={renderMobileFilters}
          >
            <AiOutlineFilter />
          </span>
        </div>
        <div className="flex min-h-[28rem] w-full flex-col flex-wrap items-start justify-start gap-4 rounded-2xl border border-gray-300 p-4 lg:w-[65rem] lg:p-6">
          {renderProductSortBy()}
          <div className="flex w-full flex-wrap items-center justify-start gap-9">
            {renderProducts()}
          </div>
        </div>
      </div>
      <BackToUp />
    </SiteLayout>
  );
};

export default CategorizedProducts;
