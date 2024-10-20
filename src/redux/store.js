import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import logger from "redux-logger";
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

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], 
        ignoredPaths: ["register"], 
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
