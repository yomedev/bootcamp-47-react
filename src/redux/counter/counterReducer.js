import { createReducer } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "./counterActions";
import { counterInitialState } from "./counterInitialState";

// const counter = {
//   [INCREMENT]: (state) => state + 1,
//   [DECREMENT]: (state) => state - 1,
// };

// export const counterReducer = (state = counterInitialState, action) => {
//   return counter[action.type] ? counter[action.type](state) : state
// };

// export const counterReducer = createReducer(counterInitialState, {
//   [incrementAction]: (state, { payload }) => state + payload,
//   [decrementAction]: (state, { payload }) => state - payload,
// });

export const counterReducer = createReducer(counterInitialState, (builder) => {
  builder
    .addCase(incrementAction, (state, { payload }) => state + payload)
    .addCase(decrementAction, (state, { payload }) => state - payload);
});
