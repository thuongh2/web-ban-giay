import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer";
import authReducer from "./User/user-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  user: authReducer,
});

export default rootReducer;
