import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ProductsProvider from "./context/ProductsProvider";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/CustomToast/CustomToast";
import CategorizedProducts from "layout/CategorizedProduts/CategorizedProducts";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import SginUpPage from "pages/SginUpPage/SginUpPage";
import LoginPage from "pages/LoginPage/LoginPage";
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
            <Route
              path="sginUp"
              element={ <SginUpPage />}
            />
            <Route
              path="login"
              element={<LoginPage />}
            />
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
