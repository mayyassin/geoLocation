import * as actionTypes from "../actions/actionTypes";

const initialState = {
  transactions: [
    {
      budget: 3,
      id: 1,
      name: "breakfast",
      amount: 3.0
    }
  ],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.concat(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
