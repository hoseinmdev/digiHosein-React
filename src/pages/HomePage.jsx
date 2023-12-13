import LandingBanner from "components/HomePage/LandingBanner";
import CircleCategories from "../components/HomePage/CircleCategories";
import BackToUpBtn from "../components/common/BackToUpBtn";
import SiteLayout from "../layout/SiteLayout";
import Slider from "components/HomePage/Slider";
import ProductsSlider from "components/HomePage/ProductsSlider";
const HomePage = () => {

  return (
    <SiteLayout>
      <div className="flex flex-col gap-4">
        <Slider />
        <CircleCategories />
        <ProductsSlider
          title="موبایل ها"
          bgColor="bg-indigo-100 dark:bg-indigo-500/30"
          category="phones"
        />
        <LandingBanner />
        <ProductsSlider
          title="لپتاپ ها"
          bgColor="bg-violet-100 dark:bg-gray-700/50"
          category="laptops"
        />
        <ProductsSlider
          title="تبلت ها"
          bgColor="bg-rose-50 dark:bg-violet-500/30"
          category="tablets"
        />
      </div>
      <BackToUpBtn />
    </SiteLayout>
  );
};

export default HomePage;
