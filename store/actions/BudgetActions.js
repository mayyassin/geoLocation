import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addBudgets = budgets => {
  return {
    type: actionTypes.ADD_BUDGETS,
    payload: budgets
  };
};
