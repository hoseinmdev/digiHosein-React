import { createContext, useContext, useReducer } from "react";
import { allProducts, bestSellerProducts, filters } from "../db.js";

export const ProductsContext = createContext();

// const productContentChanger = (state, action, actionToDo) => {
//   const changedProduct = state.products.map((p) => {
//     if (p.id === action.id) {
//       if (actionToDo === "LIKE") p.comment.like += 1;
//       if (actionToDo === "UNLIKE") p.comment.like -= 1;
//       if (actionToDo === "DISLIKE") p.comment.dislike += 1;
//       if (actionToDo === "UNDISLIKE") p.comment.dislike -= 1;
//     }
//     return p;
//   });
//   return { ...state, product: changedProduct };
// };

const ProductsProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  const initialState = {
    allProducts,
    filters,
    bestSellerProducts,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { productState: state, productDispatch: dispatch };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
