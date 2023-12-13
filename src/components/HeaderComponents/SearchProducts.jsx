import { useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Backdrop from "components/common/Backdrop";
import { allProducts } from "db";

const SearchProducts = () => {
  const [searchBoxSelected, setSearchBoxSelected] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [productsFound, setProductsFound] = useState("");

  const searchBoxSelectedHandler = () => {
    setSearchBoxSelected(!searchBoxSelected);
    setSearchInput("");
    setProductsFound("");
  };
  const searchInputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    setProductsFound(
      allProducts.filter((p) => p.title.toLowerCase().includes(inputValue)),
    );
  };

  return (
    <>
      {/* Backdrop */}
      {searchBoxSelected && (
        <Backdrop setShow={setSearchBoxSelected} show={searchBoxSelected} />
      )}

      {/* Input Box */}
      <div
        className={
          !searchBoxSelected
            ? "flex relative w-full items-center justify-start gap-4 rounded-lg bg-gray-200 p-3 dark:bg-slate-600"
            : "relative z-[1000] flex w-[25rem] items-center justify-start gap-4 rounded-md bg-white p-3 dark:bg-slate-500"
        }
        onClick={() => !searchBoxSelected && searchBoxSelectedHandler()}
      >
        <FaSearch className="lg:cursor-pointer" />
        <input
          className="flex w-full items-center justify-start bg-transparent"
          placeholder="محصول مورد نظرتان را جستجو کنید"
          value={searchBoxSelected ? searchInput : ""}
          onChange={(e) => searchInputHandler(e)}
        />
      </div>

      {/* Found Products  */}
      {productsFound && searchBoxSelected && (
        <div className="absolute right-3 top-[140px] z-[1000] flex max-h-64 w-[90%] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-4 dark:bg-gray-800 lg:right-[200px]  2xl:right-[350px] lg:top-[100px] lg:max-h-[30rem] lg:w-[28rem]">
          <div className="mr-8 flex w-full items-center justify-start gap-2 text-lg text-gray-700 dark:text-white/80">
            <HiSquares2X2 />
            جستجو برای ...
            {searchInput}
          </div>
          {productsFound.length !== allProducts.length && (
            <div className="flex h-full w-full flex-col items-center justify-start gap-6 overflow-auto">
              {productsFound.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const Product = ({ product }) => {
  const { id, imageURL, title } = product;
  const history = useNavigate();

  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      },
    );
  };
  return (
    <div
      className="flex h-24 w-11/12 items-center justify-start gap-4 rounded-2xl p-2 lg:cursor-pointer"
      onClick={renderProductPage}
    >
      <img className="w-1/4" src={imageURL} alt={title} />
      <p className="text-lg text-gray-600 dark:text-white/80">{title}</p>
    </div>
  );
};

export default SearchProducts;
