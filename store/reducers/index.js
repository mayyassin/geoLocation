import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userInfoReducer from "./userInfoReducer";
// Reducers

import transactionReducer from "./transactionReducer";
import budgetReducer from "./budgetReducer";
import depositReducer from "./depositReducer";
import goalReducer from "./goalReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  auth: authReducer,
  userInfo: userInfoReducer,
  transaction: transactionReducer,
  budget: budgetReducer,
  deposit: depositReducer,
  goal: goalReducer,
  location: locationReducer
});
