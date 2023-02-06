import BackToUpBtn from "../../components/common/Toast/BackToUpBtn";
import Loading from "../../components/Loading/Loading";
import ProductList from "../../components/ProductList/ProductList";
import Layout from "../../layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <ProductList />
        {/* <Loading /> */}
        <BackToUpBtn />
      </Layout>
    </>
  );
};

export default HomePage;
