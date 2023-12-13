import mobile from "../../assets/images/mobileCategories.webp";
import laptop from "../../assets/images/laptopCategories.webp";
import tablet from "../../assets/images/tabletCategories.webp";
import digitalWatch from "../../assets/images/digitalWatchCategories.webp";
import airpods from "../../assets/images/airpodsCategories.webp";
import console from "../../assets/images/consolCategories.webp";
import createEmptyArray from "../../utils/createEmptyArray.js";
import Skeleton from "../common/Skeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CircleCategories = () => {
  const [categoriesState, setCategoriesState] = useState(0);
  setTimeout(() => setCategoriesState(1), 1500);

  const categories = [
    {
      title: "گوشی موبایل",
      imageUrl:
        "https://www.technolife.ir/image/banner_CircleCategories_FgGs07_040c7036-93f8-4a6d-8ff5-dedb88183674.png",
      path: "/categories/phones",
    },
    {
      title: "لپتاپ",
      imageUrl:
        "https://www.technolife.ir/image/banner_CircleCategories_B574Ao_90b3facc-fc2c-4044-818d-596da0f3df78.png",
      path: "/categories/laptops",
    },
    {
      title: "تبلت",
      imageUrl:
        "https://www.technolife.ir/image/banner_CircleCategories_oBqfhC_a9f23d81-83c5-4054-9163-083454a073dc.png",
      path: "/categories/tablets",
    },
    {
      title: "ساعت هوشمند",
      imageUrl:
        "https://www.technolife.ir/image/banner_CircleCategories_bvLDVP_a32ff3c7-d94a-43a8-98e5-6c8890d06e50.png",
      path: "/categories/digitalWatches",
    },
    {
      title: "هدفون و هندزفری",
      imageUrl:
        "https://www.technolife.ir/image/banner_CircleCategories_ZF2YTy_bc869e82-f53c-40bb-b05c-65c5139585ee.png",
      path: "/categories/headphones",
    },
    {
      title: "گیمینگ",
      imageUrl:
        "https://www.technolife.ir/image/banner_CircleCategories_fQ1JW9_41fda70e-7de4-40b9-abb1-cd09f48a21d2.png",
      path: "/categories/consoles",
    },
  ];

  const renderCategories = () => {
    if (!categoriesState) {
      return <RenderSkeleton />;
    }
    if (categoriesState) {
      return (
        <div className="no-scrollbar ml-auto mr-auto flex w-full max-w-[1800px] items-center justify-start gap-2 overflow-auto p-4 lg:justify-evenly">
          {categories.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex w-full min-w-[40%] flex-col items-center justify-center gap-2 lg:min-w-max lg:cursor-pointer lg:hover:scale-105"
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  className="h-32 w-32 rounded-full border-2 border-pink-600 p-1 dark:border-2 lg:h-36 lg:w-36"
                />
                <p className="font-EstedadFont text-slate-600 dark:font-normal dark:text-white">
                  {item.title}
                </p>
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
