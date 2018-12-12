import * as actionTypes from "../actions/actionTypes";

const initialState = {
  budgets: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BUDGETS:
      return {
        ...state,
        budgets: state.budgets.concat(action.payload)
      };
    case actionTypes.UPDATE_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter(budget => {
          if (budget.id === action.payload.id) {
            budget.amount = action.payload.amount;
            return budget;
          }
          return budget;
        })
      };
    default:
      return state;
  }
};

export default reducer;
