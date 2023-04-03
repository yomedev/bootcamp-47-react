import { counterInitialState } from "./counterInitialState";
import { INCREMENT, DECREMENT } from "./counterTypes";

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
