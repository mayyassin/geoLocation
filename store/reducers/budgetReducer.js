import * as actionTypes from "../actions/actionTypes";

const initialState = {
  budgets: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUDGETS:
      return {
        ...state,
        budgets: action.payload
      };
    case actionTypes.ADD_BUDGET:
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
            budget.label = action.payload.label;
            budget.category = action.payload.category;
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
