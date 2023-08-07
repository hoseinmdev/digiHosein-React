import { AiOutlineClose } from "react-icons/ai";
import siteLofo from "../../Accets/images/logo.jpg";
import {
  FaHeadphonesAlt,
  FaHome,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import { BiGame } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const MobileMenu = ({ setShowMobileMenu }) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden");
    setTimeout(() => setShow(0), 100);
  }, []);
  const [show, setShow] = useState(-450);
  const items = [
    { title: "خانه", path: "/", icon: <FaHome /> },
    {
      title: "گوشی های موبایل",
      path: "/categories/phones",
      icon: <GoDeviceMobile />,
    },
    { title: "تبلت ها", path: "/categories/tablets", icon: <FaTabletAlt /> },
    { title: "لپتاپ ها", path: "/categories/laptops", icon: <FaLaptopCode /> },
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
    { title: "محصولات گیمینگ", path: "/categories/consoles", icon: <BiGame /> },
  ];
  return (
    <>
      <div
        className="fixed left-0 top-0 z-[160] h-screen w-screen bg-slate-700 opacity-70"
        onClick={() => {
          setShow(-450);
          setTimeout(() => setShowMobileMenu(0), 200);
          document.body.classList.remove("overflow-y-hidden");
        }}
      ></div>
      <div
        className="absolute right-[-450px] top-0 z-[1500] flex h-screen w-4/6 flex-col items-center justify-start gap-4 bg-white p-4"
        style={{ right: `${show}px` }}
      >
        <div className="flex w-full items-center justify-between">
          <AiOutlineClose
            onClick={() => {
              setShow(-450);
              setTimeout(() => setShowMobileMenu(0), 200);
              document.body.classList.remove("overflow-y-hidden");
            }}
          />
          <img src={siteLofo} alt="دیجی حسین" className="h-14 w-28" />
        </div>
        <hr className="h-[1px] w-full" />
        <div className="flex w-full flex-col items-start justify-center gap-4">
          {items.map((item) => {
            return (
              <Link
                className="w-full"
                to={item.path}
                key={item.path}
                onClick={() => {
                  setShow(-450);
                  setTimeout(() => setShowMobileMenu(0), 200);
                  document.body.classList.remove("overflow-y-hidden");
                }}
              >
                <div className="flex h-full w-full items-center justify-start gap-3 border-l border-violet-400 p-2 text-gray-700">
                  <p className="flex items-center justify-center text-violet-700">
                    {item.icon}
                  </p>
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
