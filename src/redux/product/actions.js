import {
  cartActionsTypes,
  categoriesActionsTypes,
  productActionsTypes,
} from "./actionTypes";
import axios from "axios";
import swal from "sweetalert";
import { setLocalStorage } from "../../utils/utlis";

export const productFetchRequest = () => ({
  type: productActionsTypes.REQUEST,
});
export const productFetchSuccess = (payload) => ({
  type: productActionsTypes.SUCCESS,
  payload,
});
export const productFetchFailure = (payload) => ({
  type: productActionsTypes.FAILURE,
  payload,
});

export const categoriesFetchSuccess = (payload) => ({
  type: categoriesActionsTypes.SUCCESS,
  payload,
});

export const addToCartSuccess = (payload) => ({
  type: cartActionsTypes.ADDTOCART,
  payload,
});

export const removeFromCartSuccess = (payload) => ({
  type: cartActionsTypes.REMOVEFROMCART,
  payload,
});

export const cartUpdateQuantitySuccess = (payload) => ({
  type: cartActionsTypes.UPDATEQUANTITY,
  payload,
});

const BASEURLAPI = "https://fakestoreapi.com/products";

export const fetchProducts = (category) => async (dispatch) => {
  dispatch(productFetchRequest());
  try {
    if (category) {
      const { data: products } = await axios.get(
        BASEURLAPI + `/category/${category}`
      );
      dispatch(productFetchSuccess(products));
    } else {
      const { data: products } = await axios.get(BASEURLAPI);
      dispatch(productFetchSuccess(products));
    }
    const { data: categories } = await axios.get(BASEURLAPI + "/categories");

    dispatch(categoriesFetchSuccess(categories));
  } catch (error) {
    dispatch(productFetchFailure(error.message));
  }
};

export const addToCart = (payload) => (dispatch, store) => {
  const {
    product: { cart },
  } = store();
  for (let el of cart) {
    if (el.id === payload.id) {
      return swal("Oops!", "Product Already in cart!", "error");
    }
  }
  setLocalStorage("cart", [...cart, payload]);
  dispatch(addToCartSuccess(payload));
  swal("Added!", "Your Product has been added to cart!", "success");
};

export const removeFromCart = (id) => (dispatch, store) => {
  dispatch(removeFromCartSuccess(id));
  const {
    product: { cart },
  } = store();
  setLocalStorage("cart", [...cart]);
};

export const updateQuantity = (el, data, val) => (dispatch, store) => {
  const {
    product: { cart },
  } = store();

  const payload = cart.map((item) =>
    item.id === +el.id ? { ...data, quantity: (+data.quantity) + (+val) } : item
  );
  setLocalStorage("cart", payload);
  dispatch(cartUpdateQuantitySuccess(payload));
};
