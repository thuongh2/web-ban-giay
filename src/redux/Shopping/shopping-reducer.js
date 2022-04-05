import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  product: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Great Item data from products array
      const item = state.product.find(
        (product) => product.code === action.payload.code
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((i) =>
        i.code === action.payload.code ? true : false
      );

      console.log(inCart);

      console.log(action.payload)
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.code === action.payload.code
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }]

       
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.code !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.code === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.LOAD_SELECT_PRODUCT:
      return {
        ...state,
        currentItem: action.payload,
      };

    case actionTypes.GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_BY_CATERGORY:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
