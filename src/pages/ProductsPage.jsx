import DeleteFiltersBtn from "components/ProductsPage/DeleteFiltersBtn";
import Filters from "components/ProductsPage/Filters";
import MobileFilters from "components/ProductsPage/MobileFilters";
import Products from "components/ProductsPage/Products";
import SortProducts from "components/ProductsPage/SortProducts";
import BackToUp from "components/common/BackToUpBtn";
import { allProducts } from "db";
import SiteLayout from "layout/SiteLayout";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const currentCategory = useParams().category;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [searchParams] = useSearchParams();
  const serializeFormQuery = () => {
    const allParams = {};
    for (const entry of searchParams.entries()) {
      const [key, value] = entry;
      allParams[key] = value;
    }
    return allParams;
  };
  useEffect(() => {
    const allCategoryProducts = allProducts.filter(
      (p) => p.category === currentCategory,
    );
    if (searchParams.toString().length === 0) {
      setProducts(0);
      setTimeout(() => setProducts(allCategoryProducts), 600);
    }
    setCategory(0);
    setTimeout(() => setCategory(currentCategory), 600);
  }, [currentCategory]);

  
  useEffect(() => {
    const finalProducts = [];
    // products on current category
    const allCategoryProducts = allProducts.filter(
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
    let filteredProducts = allCategoryProducts.filter((product) => {
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
      setTimeout(() => setProducts(allCategoryProducts), 600);
    }
  }, [searchParams]);

  return (
    <SiteLayout>
      <div className="flex w-full max-w-[1360px] flex-col items-start justify-center gap-4 p-4 lg:flex-row lg:justify-between ml-auto mr-auto">
        <MobileFilters category={category} />
        <div className="fadeShow2 sticky top-[160px] mr-4 hidden w-72 flex-col items-start justify-center gap-2 rounded-2xl bg-white p-2 shadow-lg dark:bg-gray-700 lg:flex">
          <div className="flex w-full items-center justify-between p-2">
            <h3 className="text-gray-600 dark:text-white/70">فیلتر ها</h3>
            <DeleteFiltersBtn />
          </div>
          <Filters category={category} />
        </div>
        <div className="fadeShow1 flex min-h-[28rem] w-full flex-col flex-wrap items-start justify-start gap-4 rounded-2xl border  border-gray-300 p-4 dark:border-none dark:bg-gray-700/50 lg:w-[65rem] lg:p-6">
          <SortProducts products={products} category={category} />
          <div className="grid w-full grid-cols-1 place-items-center gap-16 pt-14 lg:grid-cols-4">
            <Products products={products} />
          </div>
        </div>
      </div>
      <BackToUp />
    </SiteLayout>
  );
};

export default ProductsPage;
