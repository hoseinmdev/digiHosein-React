import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { localStorageMiddleware } from "redux/cartSlice";
export const store = configureStore({
  reducer: { cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    }),
});
