import * as actionTypes from "../actions/actionTypes";

const initialState = {
  deposits: [
    {
      goal: 1,
      label: "payment one",
      amount: 3.0
    }
  ],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEPOSIT:
      return {
        ...state,
        deposits: state.deposits.concat(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
