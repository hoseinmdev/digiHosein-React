import CircleCategories from "../../components/CircleCategories/CircleCategories";
import BackToUpBtn from "../../components/common/BackToUpBtn";
import ProductList from "../../components/ProductList/ProductList";
import Slider from "../../components/Slider/Slider";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <CircleCategories/>
        <ProductList />
        <BackToUpBtn />
      </Layout>
    </>
  );
};

export default HomePage;
