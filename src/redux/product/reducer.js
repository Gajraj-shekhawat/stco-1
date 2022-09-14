import { getLocalStorage } from "../../utils/utlis";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  cart: getLocalStorage("cart") || [],
};


export const productReducer = (state = initialState, { type, payload }) => {
  return state;
};
