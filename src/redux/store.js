import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user.reducer";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleWare) => (getDefaultMiddleWare().concat(logger))
});

export default store;
