import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addIncome = income => {
  return {
    type: actionTypes.ADD_INCOME,
    payload: income
  };
};

export const addExpenses = expense => {
  return {
    type: actionTypes.ADD_EXPENSES,
    payload: expense
  };
};

export const getBalance = (income, expenses, navigation) => {
  // console.log(expenses);

  let totalExpense = 0;
  let balance = 0;
  for (let index = 0; index < expenses.length; index++) {
    totalExpense += parseFloat(expenses[index].amount);
  }
  balance = parseFloat(income) - totalExpense;

  return {
    type: actionTypes.GET_BALANCE,
    payload: balance
  };
};
