import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./components/common/Toast/Toast";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
function App() {
  return (
    <div className="App">
        <Toast />
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="product/:id" element={<SingleProductPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
