import { getLocalStorage } from "../../utils/utlis";
import { cartActionsTypes, categoriesActionsTypes, productActionsTypes } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  cart: getLocalStorage("cart") || [],
  errorMessage: null,
  categories: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productActionsTypes.REQUEST: {
      return { ...state, isLoading: true, isError: false, errorMessage: null };
    }
    case productActionsTypes.SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case productActionsTypes.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }
    case categoriesActionsTypes.SUCCESS: {
      return { ...state, categories: payload };
    }
    case cartActionsTypes.ADDTOCART: {
      return { ...state, cart: [...state.cart,payload] };
    }
    default: {
      return state;
    }
  }
};
