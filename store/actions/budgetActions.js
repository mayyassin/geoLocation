import * as actionTypes from "./actionTypes";

import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.0:8000/api/"
});

export const updateBudget = (budget, amount) => {
  return dispatch => {
    dispatch({
      type: actionTypes.UPDATE_BUDGET,
      payload: { id: budget, amount: amount }
    });
  };
};

export const addBudgets = budgets => {
  return {
    type: actionTypes.ADD_BUDGETS,
    payload: budgets
  };
};
