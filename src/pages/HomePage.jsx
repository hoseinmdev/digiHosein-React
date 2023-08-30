import LandingBanner from "components/HomePage/LandingBanner";
import CircleCategories from "../components/HomePage/CircleCategories";
import BackToUpBtn from "../components/common/BackToUpBtn";
import SiteLayout from "../layout/SiteLayout";
import Slider from "components/HomePage/Slider";
import ProductsSlider from "components/HomePage/ProductsSlider";
import { useSelector } from "react-redux";
const HomePage = () => {

  const cart = useSelector((state) => state.cart)
  console.log(cart)
  return (
    <SiteLayout>
      <Slider />
      <CircleCategories />
      {/* <ProductsSlider
        bgColor="bg-gray-900"
        title="پرفروش ترین محصولات"
        titleColor="#f8fafc"
        titleLineColor="bg-violet-600"
      >
        {bestSellerProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ProductsSlider> */}
      <ProductsSlider
        title="موبایل ها"
        bgColor="bg-indigo-100"
        category="phones"
      />
      <LandingBanner />
      <ProductsSlider
        title="لپتاپ ها"
        bgColor="bg-violet-100"
        category="laptops"
      />
      <ProductsSlider title="تبلت ها" bgColor="bg-rose-50" category="tablets" />
      <BackToUpBtn />
    </SiteLayout>
  );
};

export default HomePage;
