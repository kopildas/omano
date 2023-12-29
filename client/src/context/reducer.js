import { initialState } from "./initialState";

export const actionType = {
  SET_USER: "SET_USER",
  DEL_USER: "DEL_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.DEL_USER:
      return {
        ...state,
        user: null,
        token: null,
      };
    case actionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case actionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItem: action.foodItem,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    default:
      return state;
  }
};

export default reducer;
