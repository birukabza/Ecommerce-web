import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import shopDataReducer from './shopData/shopDataSlice'
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
  shop: shopDataReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

const middlewares = [];


if (import.meta.env.MODE !== "production") {
  middlewares.push((await import("redux-logger")).default)
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
