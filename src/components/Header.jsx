import SearchProducts from "./HeaderComponents/SearchProducts";
import CartButton from "./HeaderComponents/CartButton";
import { useEffect, useState } from "react";
import UserAccountButton from "./HeaderComponents/UserAccountButton";
import MobileMenu from "./HeaderComponents/MobileMenu";
import SubmitButton from "./HeaderComponents/SubmitButton";
import SiteLogo from "components/common/SiteLogo";
import Links from "./HeaderComponents/Links";

const Header = () => {
  const [isLogin, setIsLogin] = useState();
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  useEffect(() => {
    if (userInformation && userInformation.islogin) setIsLogin(1);
  }, [userInformation]);
  return (
    <>
      <div className="sticky left-0 top-0 z-[1000] flex w-full flex-col items-center justify-center gap-4 bg-white p-3 shadow-lg lg:items-start lg:px-8 lg:py-4">
        <div className="flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
          <div className="order-1 flex w-full items-center justify-center gap-4 lg:order-none lg:w-1/2">
            <div className="hidden lg:flex">
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
            {isLogin ? <UserAccountButton /> : <SubmitButton />}
            <div className="hidden lg:flex">
              <CartButton />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Links />
        </div>
      </div>

      {/* <div className="sticky left-0  top-0 z-[100] flex w-full flex-col items-start justify-center gap-4 bg-white px-4 py-4 shadow-lg lg:hidden">
        <div className="flex w-full items-center justify-between gap-3">
          <AiOutlineMenu
            className="relative text-3xl"
            onClick={renderMobileMenu}
          />
          <SiteLogo />
          {showMobileMenu ? (
            <MobileMenu setShowMobileMenu={setShowMobileMenu} />
          ) : (
            ""
          )}
          {isLogin ? <UserAccountButton /> : <SubmitButton />}
        </div>
        <div className="flex w-full items-center justify-start gap-3">
          <SearchProducts />
          <CartButton />
        </div>
      </div> */}
    </>
  );
};

export default Header;
