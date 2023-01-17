import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const addToCart = (state, action) => {
    return {
      ...state,
      cart: [...state.cart, action.product],
      total: state.total + action.product.price,
    };
  };
  const increaseProduct = (state, action) => {
    const increaseProduct = state.cart.map((p) => {
      if (p.id === action.id) {
        p.quantity += 1;
      }
      return p;
    });
    return {
      ...state,
      cart: increaseProduct,
      total: state.total + action.price,
    };
  };
  const decreaseProduct = (state, action) => {
    const decreaseProduct = state.cart.map((p) => {
      if (p.id === action.id) {
        p.quantity -= 1;
      }
      return p;
    });
    return {
      ...state,
      cart: decreaseProduct,
      total: state.total - action.price,
    };
  };
  const deleteProduct = (state, action) => {
    const deleteProduct = state.cart.filter((p) => p.id !== action.id);
    return { cart: deleteProduct, total: state.total - action.price };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return addToCart(state, action);
      case "INCREASE":
        return increaseProduct(state, action);
      case "DECREASE":
        return decreaseProduct(state, action);
      case "DELETE":
        return deleteProduct(state, action);
      default:
        return state;
    }
  };
  const initialState = {
    cart: [],
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state: state, dispatch: dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
