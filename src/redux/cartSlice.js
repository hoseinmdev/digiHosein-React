import { createSlice } from "@reduxjs/toolkit";

const savedProducts = JSON.parse(localStorage.getItem("userProducts"));
const savedProductsTotalPrice = JSON.parse(
  localStorage.getItem("userProductsTotalPrice"),
);

const initialState = {
  products: savedProducts ? savedProducts : [],
  productsTotalPrice: savedProductsTotalPrice ? savedProductsTotalPrice : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      state.productsTotalPrice =
        state.productsTotalPrice + action.payload.price;
    },
    deleteFromCart: (state, action) => {
      const updatedProducts = state.products.filter(
        (p) => p.id !== action.payload.id,
      );
      state.products = updatedProducts;
      state.productsTotalPrice =
        state.productsTotalPrice - action.payload.price;
    },
    incrementProduct: (state, action) => {
      const increasedProduct = state.products.map((p) => {
        if (p.id === action.payload.id) p.quantity += 1;
        return p;
      });
      state.products = increasedProduct;
      state.productsTotalPrice =
        state.productsTotalPrice + action.payload.price;
    },
    decrementProduct: (state, action) => {
      const decreasedProduct = state.products.map((p) => {
        if (p.id === action.payload.id) p.quantity -= 1;
        return p;
      });
      state.products = decreasedProduct;
      state.productsTotalPrice =
        state.productsTotalPrice - action.payload.price;
    },
    cleanCart: (state) => {
      state.products = [];
      state.productsTotalPrice = 0;
    },
  },
});

export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(
      "userProducts",
      JSON.stringify(getState().cart.products),
    );
    localStorage.setItem(
      "userProductsTotalPrice",
      JSON.stringify(getState().cart.productsTotalPrice),
    );
    return result;
  };
};

export const {
  addProductToCart,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  cleanCart,
} = cartSlice.actions;

export default cartSlice.reducer;
