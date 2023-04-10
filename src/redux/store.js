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
import { authReducer } from "./auth/authSlice";
import { profileReducer } from "./profile/profileSlice";

const config = {
  key: "users",
  storage,
  whitelist: ["data"],
};

const persistedReducer = persistReducer(config, usersReducer);

const authConfig = {
  key: "auth",
  storage,
};

const authPersistedReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: persistedReducer,
    articles: articlesReducer,
    auth: authPersistedReducer,
    profile: profileReducer,
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
