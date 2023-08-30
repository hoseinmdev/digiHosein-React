import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import CartProvider from "./context/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/common/CustomToast";
import LoginPage from "pages/LoginPage";
import SginUpPage from "pages/SginUpPage";
import SingleProductPage from "pages/SingleProductPage";
import HomePage from "pages/HomePage";
import CartPage from "pages/CartPage";
import NotFoundPage from "pages/NotFoundPage";
import { useEffect } from "react";
import backToUp from "utils/BackToUp";
import ProductsPage from "pages/ProductsPage";

function App() {
  const location = useLocation();
  useEffect(() => backToUp(), [location]);
  return (
    <div className="App">
      <CustomToast />
      <CartProvider>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="sginUp" element={<SginUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="categories/:category" element={<ProductsPage />} />
          <Route path="product/:id" element={<SingleProductPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
