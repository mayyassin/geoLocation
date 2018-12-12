import * as actionTypes from "./actionTypes";

import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.0:8000/api/"
});

export const addTransaction = (transaction, navigation) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_TRANSACTION,
      payload: transaction
    });
  };
};
