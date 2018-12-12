import * as actionTypes from "../actions/actionTypes";

const initialState = {
  income: 0,
  expenses: [],
  balance: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOME:
      return {
        ...state,
        income: action.payload
      };
    case actionTypes.ADD_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.concat(action.payload)
      };
    case actionTypes.GET_BALANCE:
      return {
        ...state,
        balance: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
