import LandingBanner from "components/LandingBanner/LandingBanner";
import HomeLaptops from "components/Laptops/HomeLaptops";
import HomePhones from "components/Phones/HomePhones";
import BestSellerProducts from "../../components/BestSellerProducts/BestSellerProducts";
import CircleCategories from "../../components/CircleCategories/CircleCategories/CircleCategories";
import BackToUpBtn from "../../components/common/BackToUpBtn/BackToUpBtn";
import Slider from "../../components/Slider/Slider";
import SiteLayout from "../../layout/SiteLayout/SiteLayout";
import Tablets from "components/Tablets/Tablets";
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
        <Tablets/>
        <BackToUpBtn />
      </SiteLayout>
    </>
  );
};

export default HomePage;
