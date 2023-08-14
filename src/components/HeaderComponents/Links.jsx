import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiGame } from "react-icons/bi";
import { BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import {
  FaHeadphonesAlt,
  FaHome,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { NavLink } from "react-router-dom";

const routes = [
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

const Links = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-5 text-gray-700 lg:w-auto lg:flex-row lg:items-center lg:gap-3">
      {routes.map((item) => {
        return (
          <NavLink
            key={item.title}
            className={({ isActive }) =>
              `lg:border-b-2 w-full lg:w-fit flex cursor-pointer items-center justify-center gap-2 px-2 py-1 text-gray-700
                ${
                  isActive
                    ? "border-violet-600 text-violet-600 font-bold"
                    : "border-white hover:border-violet-700"
                }
              }`
            }
            to={item.path}
          >
            <div className="hidden lg:flex">{item.icon}</div>
            <div className="flex w-full justify-between">
              {item.title}
              <AiOutlineArrowLeft className="lg:hidden" />
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
