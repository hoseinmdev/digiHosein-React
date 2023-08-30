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
      allProducts.filter((p) =>
        p.title.toLowerCase().includes(inputValue),
      ),
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
            ? "flex w-full items-center justify-start gap-4 rounded-lg bg-gray-200  p-3"
            : "relative z-[1000] flex w-[25rem] items-center justify-start gap-4 rounded-md bg-white p-3"
        }
        onClick={() => !searchBoxSelected && searchBoxSelectedHandler()}
      >
        <FaSearch className="cursor-pointer" />
        <input
          className="flex w-full items-center justify-start bg-transparent"
          placeholder="محصول مورد نظرتان را جستجو کنید"
          value={searchBoxSelected ? searchInput : ""}
          onChange={(e) => searchInputHandler(e)}
        />
      </div>

      {/* Found Products  */}
      {productsFound && searchBoxSelected && (
        <div className="absolute right-3 top-[140px] z-[1000] flex max-h-64 w-[21.5rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-4 lg:right-[200px] lg:top-[100px] lg:max-h-[30rem] lg:w-[28rem]">
          <div className="mr-8 flex w-full items-center justify-start gap-2 text-lg text-gray-700">
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
      className="flex h-24 w-11/12 cursor-pointer items-center justify-start gap-4 rounded-2xl p-2"
      onClick={renderProductPage}
    >
      <img className="w-1/4" src={imageURL} alt={title} />
      <p className="text-lg text-gray-600">{title}</p>
    </div>
  );
};

export default SearchProducts;
