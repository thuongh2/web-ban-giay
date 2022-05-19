import * as actionTypes from "./shoppingTypes";

const INITIAL_STATE = {
  product: [],
  cart: [],
  category: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Great Item data from products array
      const item = state.product.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((i) =>
        i.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...action.payload, qty: item.qty + 1 }
                : action.payload
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.REMOVE_ALL_PRODUCT:
      return {
        ...state,
        cart: [],
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
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
    case actionTypes.GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state;
  }
};

export default shopReducer;
