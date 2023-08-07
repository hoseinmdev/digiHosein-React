import { useLocation } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import SiteLayout from "../layout/SiteLayout";
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
