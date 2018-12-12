import * as actionTypes from "../actions/actionTypes";

const initialState = {
  budgets: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BUDGET:
      return {
        ...state,
        budgets: state.budgets.concat(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
