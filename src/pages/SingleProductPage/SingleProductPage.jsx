import Layout from "../../layout/Layout";
import { useLocation } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
const SingleProductPage = () => {
  const { state } = useLocation();
  return (
    <>
      <Layout>
        <SingleProduct product={state} />
      </Layout>
    </>
  );
};

export default SingleProductPage;
