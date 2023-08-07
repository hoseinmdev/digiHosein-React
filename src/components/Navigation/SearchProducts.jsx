import { useProducts } from "context/ProductsProvider";
import { useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import FoundProduct from "./FoundProduct";
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
      p.title.toLowerCase().includes(e.target.value),
    );
    setProductsFound(findedProducts);
  };
  const renderBackdrop = () => {
    return (
      <div
        className="fixed left-0 top-0 z-[100] h-screen w-screen bg-gray-600 opacity-50"
        onClick={searchBoxSelectedHandler}
      ></div>
    );
  };
  return (
    <>
      <div
        className={
          !searchBoxSelected
            ? "flex w-full items-center justify-start gap-4 rounded-lg bg-gray-200  p-3"
            : "relative z-[1000] flex w-[25rem] items-center justify-start gap-4 rounded-md bg-white p-3"
        }
        onClick={() => (!searchBoxSelected ? searchBoxSelectedHandler() : "")}
      >
        <FaSearch className="cursor-pointer" />
        <input
          className="flex w-full items-center justify-start bg-transparent"
          placeholder="محصول مورد نظرتان را جستجو کنید"
          value={searchInput}
          onChange={(e) => searchInputHandler(e)}
        />
      </div>
      {productsFound && (
        <div className="absolute right-3 top-[140px] z-[1000] flex max-h-64 w-[21.5rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-4 lg:right-[200px] lg:top-[100px] lg:max-h-[30rem] lg:w-[28rem]">
          <div className="mr-8 flex w-full items-center justify-start gap-2 text-lg text-gray-700">
            <HiSquares2X2 />
            جستجو برای ...
            <p>{searchInput}</p>
          </div>
          {productsFound.length !== productState.allProducts.length ? (
            <div className="flex h-full w-full flex-col items-center justify-start gap-6 overflow-auto">
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
