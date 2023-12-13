import SearchProducts from "./HeaderComponents/SearchProducts";
import CartButton from "./HeaderComponents/CartButton";
import { useEffect, useState } from "react";
import UserAccountButton from "./HeaderComponents/UserAccountButton";
import MobileMenu from "./HeaderComponents/MobileMenu";
import SubmitButton from "./HeaderComponents/SubmitButton";
import SiteLogo from "components/common/SiteLogo";
import Links from "./HeaderComponents/Links";
import ThemeButton from "./HeaderComponents/ThemeButton";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      <div className="sticky left-0 top-0 z-[1000] flex w-full max-w-[2000px] flex-col items-center justify-center gap-4 bg-white p-3 shadow-lg dark:bg-gray-800 dark:text-white lg:items-start lg:px-8 lg:py-4">
        <div className="flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
          <div className="order-1 flex w-full items-center justify-center gap-4 lg:order-none lg:w-1/2">
            <div className="hidden min-w-[9rem] lg:flex">
              <SiteLogo />
            </div>
            <SearchProducts />
            <div className="flex lg:hidden">
              <CartButton />
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-center">
            <div className="flex lg:hidden">
              <MobileMenu />
            </div>
            <div className="flex lg:hidden">
              <SiteLogo />
            </div>
            <ThemeButton />
            {user ? <UserAccountButton /> : <SubmitButton />}
            <div className="hidden lg:flex">
              <CartButton />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Links />
        </div>
      </div>
    </>
  );
};

export default Header;
