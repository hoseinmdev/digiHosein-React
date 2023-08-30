import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "redux/cartSlice"
export const store = configureStore({
  reducer: { cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
