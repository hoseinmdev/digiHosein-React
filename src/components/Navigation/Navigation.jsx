import digiHosein from "../../Accets/images/logo.jpg";
import {
  FaHome,
  FaHeadphonesAlt,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { GoDeviceMobile } from "react-icons/go";
import { BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import SearchProducts from "./SearchProducts";
import CartButton from "./CartButton";
import { useEffect, useState } from "react";
import UserAccountButton from "./UserAccountButton";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "../mobile/MobileMenu";

const items = [
  { title: "خانه", path: "/", icon: <FaHome /> },
  { title: "موبایل", path: "/categories/phones", icon: <GoDeviceMobile /> },
  { title: "تبلت", path: "/categories/tablets", icon: <FaTabletAlt /> },
  { title: "لپتاپ", path: "/categories/laptops", icon: <FaLaptopCode /> },
  {
    title: "اسپیکر و بلندگو",
    path: "/categories/speakers",
    icon: <BsSpeakerFill />,
  },
  {
    title: "ساعت هوشمند",
    path: "/categories/digitalWatches",
    icon: <BsSmartwatch />,
  },
  {
    title: "هدفون و هندزفری",
    path: "/categories/headphones",
    icon: <FaHeadphonesAlt />,
  },
  { title: "گیمینگ", path: "/categories/consoles", icon: <BiGame /> },
];

const Navigation = () => {
  const [isLogin, setIsLogin] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(0);
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  useEffect(() => {
    if (userInformation && userInformation.islogin) setIsLogin(1);
  }, [userInformation]);
  const renderMobileMenu = () => {
    setShowMobileMenu(1);
  };
  return (
    <>
      <div className="sticky  left-0 top-0 z-[1000] hidden w-full flex-col items-start justify-center gap-4 bg-white px-8 py-4 shadow-lg lg:flex">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-1/2 items-center justify-center gap-4">
            <img src={digiHosein} alt="Digi Hosien" className="h-20 w-36" />
            <SearchProducts />
          </div>
          {isLogin ? (
            <div className="flex items-center justify-center gap-4">
              <UserAccountButton />
              <CartButton />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <Link to="/sginUp">
                <button className="rounded-lg border border-violet-600 px-6 py-2">
                  ورود | ثبت نام
                </button>
              </Link>
              <CartButton />
            </div>
          )}
        </div>
        <div className="flex items-center justify-start gap-3 text-gray-700">
          {items.map((item) => {
            return (
              <NavLink
                key={item.title}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "flex cursor-pointer items-center justify-center gap-2 border-b-2 border-violet-600 px-2 py-1 text-violet-600"
                      : "flex cursor-pointer items-center justify-center gap-2 border-b-2 border-white px-2 py-1 hover:border-violet-700"
                  }`
                }
                to={item.path}
              >
                {item.icon}
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="sticky left-0  top-0 z-[100] flex w-full flex-col items-start justify-center gap-4 bg-white px-4 py-4 shadow-lg lg:hidden">
        <div className="flex w-full items-center justify-between gap-3">
          <AiOutlineMenu
            className="relative text-3xl"
            onClick={renderMobileMenu}
          />
          <img src={digiHosein} alt="Digi Hosien" className="w-28" />
          {showMobileMenu ? (
            <MobileMenu setShowMobileMenu={setShowMobileMenu} />
          ) : (
            ""
          )}
          {isLogin ? (
            <div className="flex items-center justify-center gap-4">
              <UserAccountButton />
            </div>
          ) : (
            <Link to="/sginUp">
              <div className="flex items-center justify-center gap-4">
                <button className="rounded-lg border border-violet-600 px-5 py-2">
                  ورود | ثبت نام
                </button>
              </div>
            </Link>
          )}
        </div>
        <div className="flex w-full items-center justify-start gap-3">
          <SearchProducts />
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default Navigation;
