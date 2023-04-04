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

const config = {
  key: "users",
  storage,
  whitelist: ["data"],
  // blacklist: ['isModalOpen', 'search']
};

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   users: usersReducer,
// });

const persistedReducer = persistReducer(config, usersReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: persistedReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// if (typeof reducer === 'object') {
//   const rootReducer = combineReducers(reducer)
// }
