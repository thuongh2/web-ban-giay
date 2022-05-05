import axios from "axios";
import * as actionTypes from "./shopping-types";
import fake  from "../../api/fake";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeAllFromCart = () => {
  return {
    type: actionTypes.REMOVE_ALL_PRODUCT,
    payload: []
  }
}

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const loadSelectedItem =  (id) => async (dispatch) =>{
  
  const response = await axios.get(`http://127.0.0.1:8080/api/product/${id}`);

  console.log(response.data)

  dispatch({type: actionTypes.LOAD_SELECT_PRODUCT, payload: response.data})  

};
export const getAllProduct =  () => async (dispatch) =>{
  
    const response = await axios.get("http://127.0.0.1:8080/api/products-d");
    console.log(response.data)
  
    dispatch({type: actionTypes.GET_ALL_PRODUCT, payload: response.data})  

};

export const getAllProductByCategoryId = (category) =>  {
  return async function(dispatch, getState){

    console.log(category)
    const response = await axios.get(`http://localhost:8080/product/category/${category}`);
  
    dispatch({type: actionTypes.GET_PRODUCT_BY_CATERGORY, payload: response.data})  
  }

};

