import LandingBanner from "components/LandingBanner/LandingBanner";
import HomeLaptops from "components/Laptops/HomeLaptops";
import HomePhones from "components/Phones/HomePhones";
import BestSellerProducts from "../components/BestSellerProducts/BestSellerProducts";
import CircleCategories from "../components/CircleCategories/CircleCategories/CircleCategories";
import BackToUpBtn from "../components/common/BackToUpBtn/BackToUpBtn";
import SiteLayout from "../layout/SiteLayout/SiteLayout";
import Tablets from "components/Tablets/Tablets";
import Slider from "components/Slider";
const HomePage = () => {
  return (
    <>
      <SiteLayout>
        <Slider />
        <CircleCategories />
        <BestSellerProducts />
        <HomePhones />
        <LandingBanner />
        <HomeLaptops />
        <Tablets />
        <BackToUpBtn />
      </SiteLayout>
    </>
  );
};

export default HomePage;
