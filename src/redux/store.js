import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer, composeWithDevTools());

// const initialState = {
//   counter: 0,
//   users: {
//     data: [],
//     isModalOpen: false,
//     search: "",
//   },
// };


// console.log(store.getState());
// store.dispatch({ type: "increment" });
// console.log(store.getState());
