import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./components/common/Toast/Toast";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
// import ProductProvider from "./context/ProductProvider";
import ProductsProvider from "./context/ProductsProvider";
function App() {
  return (
    <div className="App">
      <Toast />
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="product/:id" element={<SingleProductPage />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
