import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import CartProvider from "./context/CartProvider";
import ProductsProvider from "./context/ProductsProvider";
import CategorizedProducts from "layout/CategorizedProduts/CategorizedProducts";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/CustomToast/CustomToast";
import LoginPage from "pages/LoginPage";
import SginUpPage from "pages/SginUpPage";
import SingleProductPage from "pages/SingleProductPage";
import HomePage from "pages/HomePage";
import CartPage from "pages/CartPage";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <CustomToast />
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="sginUp" element={<SginUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="categories/:category"
              element={<CategorizedProducts />}
            />
            <Route path="product/:id" element={<SingleProductPage />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
