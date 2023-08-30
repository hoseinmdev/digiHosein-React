import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/common/CustomToast";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import backToUp from "utils/BackToUp";
import HomePage from "pages/HomePage";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "store";
import SiteLayout from "layout/SiteLayout";
import Skeleton from "components/common/Skeleton";
const CartPage = React.lazy(() => import("pages/CartPage"));
const ProductsPage = React.lazy(() => import("pages/ProductsPage"));
const SingleProductPage = React.lazy(() => import("pages/SingleProductPage"));
const SginUpPage = React.lazy(() => import("pages/SginUpPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const NotFoundPage = React.lazy(() => import("pages/NotFoundPage"));

function App() {
  const location = useLocation();
  useEffect(() => backToUp(), [location]);
  return (
    <div className="App">
      <CustomToast />
      <Provider store={store}>
          <Suspense fallback={<SiteLayout>
            <Skeleton width={"95%"} height={"95%"} radius={"10px"}/>
          </SiteLayout>}>
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="sginUp" element={<SginUpPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="categories/:category" element={<ProductsPage />} />
              <Route path="product/:id" element={<SingleProductPage />} />
            </Routes>
          </Suspense>
      </Provider>
    </div>
  );
}

export default App;
