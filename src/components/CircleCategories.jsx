import mobile from "../assets/images/mobileCategories.webp";
import laptop from "../assets/images/laptopCategories.webp";
import tablet from "../assets/images/tabletCategories.webp";
import digitalWatch from "../assets/images/digitalWatchCategories.webp";
import airpods from "../assets/images/airpodsCategories.webp";
import console from "../assets/images/consolCategories.webp";
import createEmptyArray from "utils/createEmptyArray";
import Skeleton from "./Skeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CircleCategories = () => {
  const [categoriesState, setCategoriesState] = useState(0);
  setTimeout(() => setCategoriesState(1), 1500);

  const categories = [
    { title: "گوشی موبایل", imageUrl: mobile, path: "/categories/phones" },
    { title: "لپتاپ", imageUrl: laptop, path: "/categories/laptops" },
    { title: "تبلت", imageUrl: tablet, path: "/categories/tablets" },
    {
      title: "ساعت هوشمند",
      imageUrl: digitalWatch,
      path: "/categories/digitalWatches",
    },
    {
      title: "هدفون و هندزفری",
      imageUrl: airpods,
      path: "/categories/headphones",
    },
    { title: "گیمینگ", imageUrl: console, path: "/categories/consoles" },
  ];

  const renderCategories = () => {
    if (!categoriesState) {
      return <RenderSkeleton />;
    }
    if (categoriesState) {
      return (
        <div className="no-scrollbar flex w-full items-center justify-start gap-4 overflow-auto p-4 lg:justify-evenly">
          {categories.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex w-full min-w-[35%] cursor-pointer flex-col items-center justify-center gap-2 hover:scale-105 lg:min-w-max"
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  className="h-28 w-28 rounded-full border-2 border-indigo-200 border-b-violet-500 border-t-violet-500 lg:h-32 lg:w-32 lg:border-4"
                />
                <p className="font-bold text-slate-600">{item.title}</p>
              </Link>
            );
          })}
        </div>
      );
    }
  };
  return renderCategories();
};

const RenderSkeleton = () => {
  const dekstopSkeletons = createEmptyArray(6).map((_, i) => (
    <div
      key={i}
      className="flex flex-col items-center justify-center gap-4 p-4"
    >
      <Skeleton width={"8.5rem"} height={"8.5rem"} radius={"100%"} />
      <Skeleton width={"6rem"} height={"2rem"} radius={"15px"} />
    </div>
  ));
  const mobileSkeletons = createEmptyArray(3).map((_, i) => (
    <div
      key={i}
      className=" flex flex-col items-center justify-center gap-4 py-4"
    >
      <Skeleton width={"6.5rem"} height={"6.5rem"} radius={"100%"} />
      <Skeleton width={"5rem"} height={"1.5rem"} radius={"15px"} />
    </div>
  ));

  return (
    <>
      <div className="hidden w-full items-center justify-evenly lg:flex">
        {dekstopSkeletons}
      </div>
      <div className="flex items-center justify-center gap-2 lg:hidden">
        {mobileSkeletons}
      </div>
    </>
  );
};

export default CircleCategories;
