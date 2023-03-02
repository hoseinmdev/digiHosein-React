import styles from "./circleCategories.module.css";
import mobile from "../../../Accets/images/mobileCategories.webp";
import laptop from "../../../Accets/images/laptopCategories.webp";
import tablet from "../../../Accets/images/tabletCategories.webp";
import digitalWatch from "../../../Accets/images/digitalWatchCategories.webp";
import airpods from "../../../Accets/images/airpodsCategories.webp";
import console from "../../../Accets/images/consolCategories.webp";
import CircleCategoriesSkeleton from "../CircleCategoriesSkeleton/CircleCategoriesSkeleton";
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
    { title: "تبلت", imageUrl: tablet, path: "/categories/tablet" },
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
        <div className={styles.categoriesBlock}>
          {categories.map((item) => {
            return (
              <Link key={item.path} to={item.path}>
                <div>
                  <img src={item.imageUrl} alt={item.imageUrl} />
                  {item.title}
                </div>
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
