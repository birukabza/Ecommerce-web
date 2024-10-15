import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setCurrentUser: (state, actions) => {
            state.currentUser = actions.payload;
        },
        clearCurrentUser: (state)=>{
            state.currentUser = null;
        }
    },
});

export const { clearCurrentUser, setCurrentUser} = userSlice.actions

export default userSlice.reducer
