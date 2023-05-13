export const INITIAL_STATE = {
  totalPrice: 0,
  products: [],
  favorite: [],
};

export const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_CART", payload);
      return {
        ...state,
        totalPrice: payload.totalPrice,
      };
    case "ADD_TO_FAVORITE":
      console.log("ADD_TO_FAV", payload);
      return {
        ...state,
        favorite: payload.favorite,
      };
    case "REMOVE_FROM_FAVORITE":
      console.log("REMOVE_FROM_FAV", payload);
      return {
        ...state,
        favorite: payload.favorite,
      };
    default:
      throw new Error(`there is something went wrong ${type}`);
  }
};
