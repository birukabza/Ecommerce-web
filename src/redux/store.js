import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

const middlewares = [];

if (process.env.NODE_ENV !== "production") {
  import("redux-logger").then((loggerModule) => {
    const logger = loggerModule.default;
    middlewares.push(logger);
  });
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], 
        ignoredPaths: ["register"], 
      },
    }).concat(middlewares), 
});

const persistor = persistStore(store);

export { store, persistor };
