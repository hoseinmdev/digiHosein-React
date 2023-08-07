import mobile from "../../Accets/images/mobileCategories.webp";
import laptop from "../../Accets/images/laptopCategories.webp";
import tablet from "../../Accets/images/tabletCategories.webp";
import digitalWatch from "../../Accets/images/digitalWatchCategories.webp";
import airpods from "../../Accets/images/airpodsCategories.webp";
import console from "../../Accets/images/consolCategories.webp";
import CircleCategoriesSkeleton from "./CircleCategoriesSkeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CircleCategories = () => {
  const [categoriesState, setCategoriesState] = useState(0);
  useEffect(() => {
    const setData = () => {
      setTimeout(() => setCategoriesState(1), 1500);
    };
    setData();
  }, []);
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
      return <CircleCategoriesSkeleton />;
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

export default CircleCategories;
