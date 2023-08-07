import LandingBanner from "components/LandingBanner";
import CircleCategories from "../components/CircleCategories/CircleCategories";
import BackToUpBtn from "../components/common/BackToUpBtn";
import SiteLayout from "../layout/SiteLayout";
import Slider from "components/Slider";
import { useProducts } from "context/ProductsProvider";
import HomePageProductsLayout from "layout/HomePageProductsLayout";
import Product from "components/Product";
const HomePage = () => {
  const { productState } = useProducts();
  const tablets = productState.allProducts.filter(
    (p) => p.category === "tablets",
  );
  const laptops = productState.allProducts.filter(
    (p) => p.category === "laptops",
  );
  const phones = productState.allProducts.filter(
    (p) => p.category === "phones",
  );
  return (
    <>
      <SiteLayout>
        <Slider />
        <CircleCategories />

        {/* BEST SELLER PRODUCTS */}
        <HomePageProductsLayout
          bgColor="bg-gray-900"
          title="پرفروش ترین محصولات"
          titleColor="#f8fafc"
          titleLineColor="bg-violet-600"
        >
          {productState.bestSellerProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </HomePageProductsLayout>

        {/* PHONES */}
        <HomePageProductsLayout title="موبایل ها" bgColor="bg-indigo-100">
          {phones.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </HomePageProductsLayout>

        <LandingBanner />
        {/* LAPTOPS */}
        <HomePageProductsLayout title="لپتاپ ها" bgColor="bg-violet-100">
          {laptops.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </HomePageProductsLayout>

        {/* TABLETS */}
        <HomePageProductsLayout title="تبلت ها" bgColor="bg-rose-50">
          {tablets.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </HomePageProductsLayout>

        <BackToUpBtn />
      </SiteLayout>
    </>
  );
};

export default HomePage;
