import * as actionTypes from "../actions/actionTypes";

const initialState = {
  budgets: [
    {
      id: 1,
      name: "Food",
      amount: 15.0
    },
    {
      id: 2,
      name: "Social",
      amount: 5.0
    },

    {
      id: 3,
      name: "Shopping",
      amount: 25.0
    }
  ],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
