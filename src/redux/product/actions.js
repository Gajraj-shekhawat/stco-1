import { categoriesActionsTypes, productActionsTypes } from "./actionTypes";
import axios from "axios";

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

const BASEURLAPI = "https://fakestoreapi.com/products";

export const fetchProducts = (category) => async (dispatch) => {
  dispatch(productFetchRequest());
  try {
    if(category){
        const { data:products } = await axios.get(BASEURLAPI+`/category/${category}`);
        dispatch(productFetchSuccess(products));
    }else{
        const { data:products } = await axios.get(BASEURLAPI);
        dispatch(productFetchSuccess(products));
    }
    const {data:categories}=await  axios.get(BASEURLAPI+'/categories')
    
    dispatch(categoriesFetchSuccess(categories));

  } catch (error) {
    dispatch(productFetchFailure(error.message));
  }
};


