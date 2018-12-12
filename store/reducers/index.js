import { combineReducers } from "redux";

// Reducers
import transactionReducer from "./transactionReducer";
import budgetReducer from "./budgetReducer";

export default combineReducers({
  transaction: transactionReducer,
  budget: budgetReducer
});
