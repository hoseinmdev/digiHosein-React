import { useCart } from "context/CartProvider";
import SiteLayout from "../layout/SiteLayout";
import EmptyCart from "components/CartPage/EmptyCart";
import PurchaseSummary from "components/CartPage/PurchaseSummary";
import HeaderOfCart from "components/CartPage/HeaderOfCart";
import PurchasedProducts from "components/CartPage/PurchasedProducts";
const CartPage = () => {
  const { state } = useCart();
  const renderCart = () => {
    if (state.cart.length !== 0) {
      return (
        <div className=" mt-4 flex min-h-[33rem] w-11/12 flex-col items-start lg:mr-0 lg:mt-0">
          <HeaderOfCart />
          <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row">
            <PurchasedProducts />
            <PurchaseSummary />
          </div>
        </div>
      );
    } else return <EmptyCart />;
  };

  return <SiteLayout>{renderCart()}</SiteLayout>;
};

export default CartPage;
