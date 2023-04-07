import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteProductReducer,
  newProductReducer,
  productDetailsReducer,
  productsReducer,
} from "./reducers/ProductReducer";
import {
  deletePurchaseReducer,
  newPurchaseReducer,
  purchasesReducer,
} from "./reducers/PurchaseReducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  purchases: purchasesReducer,
  user: userReducer,
  profile: profileReducer,

  createProduct: newProductReducer,
  createPurchase: newPurchaseReducer,
  deleteProduct: deleteProductReducer,
  deletePurchase: deletePurchaseReducer,

  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
});

const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
