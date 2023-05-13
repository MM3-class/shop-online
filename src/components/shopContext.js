import { useReducer, createContext, useContext } from "react";
import { INITIAL_STATE, shopReducer } from "./shopReducer";

export const shopContext = createContext(INITIAL_STATE);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, INITIAL_STATE);

  const addToCart = (product) => {
    const handleCart = state.products.concat(product);
    updatePrice(handleCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: handleCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const handleCart = state.products.filter(
      (item) => item.name !== product.name
    );
    updatePrice(handleCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: handleCart,
      },
    });
  };
  const updatePrice = (products) => {
    let total = 0;

    products.forEach((product) => (total += product.price));
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        totalPrice: total,
      },
    });
  };
  const addToFavorite = (product) => {
    const favorite = state.favorite.concat(product);
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: {
        favorite,
      },
    });
  };
  const removeFromFavorite = (product) => {
    const removeFav = state.favorite.filter((fav) => fav.name !== product.name);
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      payload: {
        favorite: removeFav,
      },
    });
  };
  const value = {
    price: state.totalPrice,
    products: state.products,
    favorite: state.favorite,
    addToCart,
    removeFromCart,
    addToFavorite,
    removeFromFavorite,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(shopContext);
  if (context === undefined) {
    throw new Error("must be used within shopContext");
  } else {
    return context;
  }
};
