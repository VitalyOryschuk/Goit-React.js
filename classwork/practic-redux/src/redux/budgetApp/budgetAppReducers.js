import { combineReducers } from "redux";
import * as types from "./budgetAppTypes";

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return action.payload.budget;

    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [payload.expense, ...state];

    case types.REMOVE_EXPENSE:
      return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer
});
