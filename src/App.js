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
import { FaSpinner } from "react-icons/fa";
import ForgotPassword from "pages/ForgotPassword";
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
    <div className="App dark:bg-slate-800">
      <CustomToast />
      <Provider store={store}>
        <Suspense
          fallback={
            <SiteLayout>
              <div className="flex h-screen w-full items-start justify-center pt-40">
                <div className="animate-spin text-3xl text-gray-500">
                  <FaSpinner />
                </div>
              </div>
            </SiteLayout>
          }
        >
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="sginUp" element={<SginUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="categories/:category" element={<ProductsPage />} />
            <Route path="product/:id" element={<SingleProductPage />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
