// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { getArticlesService } from "../services/articlesService";

// const reducer = combineReducers({
  //   counter: counterReducer,
//   users: usersReducer,
// });

// export const getArticlesThunk = () => async (dispatch) => {
//   dispatch({ type: "getArticles/pending" });
//   try {
//     const data = await getArticlesService();
//     console.log(data);
//     dispatch({ type: "getArticles/fullfield", payload: data });
//   } catch (error) {
//     dispatch({ type: "getArticles/rejected" });
//   }
// };

// const middleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }

//   return next(action);
// };

// export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// middleware(store)(next)(action)

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { counterReducer } from "./counter/counterReducer";
import { usersReducer } from "./users/usersSlice";
import { articlesReducer } from "./articles/articlesSlice";

const config = {
  key: "users",
  storage,
  whitelist: ["data"],
};

const persistedReducer = persistReducer(config, usersReducer);

// const middleware = store => next => action => next(action)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: persistedReducer,
    articles: articlesReducer
  },
  devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
