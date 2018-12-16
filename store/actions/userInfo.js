import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://68.183.217.91/api/expense/"
});

export const addIncome = income => {
  return {
    type: actionTypes.ADD_INCOME,
    payload: income
  };
};

// export const addExpenses = expense => {
//   return {
//     type: actionTypes.ADD_EXPENSES,
//     payload: expense
//   };
// };

export const addExpenses = (expense, navigation) => {
  return dispatch => {
    instance
      .post("create/", {
        label: expense.label,
        amount: expense.amount
      })
      .then(res => res.data)
      .then(expense => {
        dispatch({
          type: actionTypes.ADD_EXPENSES,
          payload: expense
        });
      })
      .then(() => navigation.navigate("Home"))
      .catch(err => {
        dispatch(console.log(err.response));
      });
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
