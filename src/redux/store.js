import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice"
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleWare) => (getDefaultMiddleWare().concat(logger))
});

export default store;
