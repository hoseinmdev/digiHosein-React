import { useLocation } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct/SingleProduct";
import SiteLayout from "../layout/SiteLayout/SiteLayout";
const SingleProductPage = () => {
  const { state } = useLocation();
  return (
    <>
      <SiteLayout>
        <SingleProduct product={state} />
      </SiteLayout>
    </>
  );
};

export default SingleProductPage;
