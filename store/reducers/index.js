import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import userInfoReducer from "./userInfoReducer";
import budgets from "./budgetReducer";
// Reducers

export default combineReducers({
  auth: AuthReducer,
  userInfo: userInfoReducer,
  budgets: budgets
});
