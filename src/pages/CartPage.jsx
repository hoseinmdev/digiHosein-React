import SiteLayout from "../layout/SiteLayout";
import EmptyCart from "components/CartPage/EmptyCart";
import PurchaseSummary from "components/CartPage/PurchaseSummary";
import HeaderOfCart from "components/CartPage/HeaderOfCart";
import PurchasedProducts from "components/CartPage/PurchasedProducts";
import { useSelector } from "react-redux";
const CartPage = () => {
  const cart = useSelector((state) => state.cart.products)
  return (
    <SiteLayout>
      {cart.length !== 0 ? (
        <div className=" mt-4 flex min-h-[33rem] w-full flex-col items-start lg:mr-0 lg:mt-0">
          <HeaderOfCart />
          <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row">
            <PurchasedProducts />
            <PurchaseSummary />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </SiteLayout>
  );
};

export default CartPage;
