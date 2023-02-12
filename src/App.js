import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ProductsProvider from "./context/ProductsProvider";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "./components/CustomToast/CustomToast";
function App() {
  return (
    <div className="App">
      <CustomToast/>
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
