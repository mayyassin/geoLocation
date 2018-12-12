import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import userInfoReducer from "./userInfoReducer";
// Reducers
import transactionReducer from "./transactionReducer";
import budgetReducer from "./budgetReducer";

export default combineReducers({
  auth: AuthReducer,
  userInfo: userInfoReducer,
  transaction: transactionReducer,
  budget: budgetReducer
});
