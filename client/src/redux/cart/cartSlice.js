import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    show: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        showDropdown: (state) => {
            state.show = !state.show;
        },
        addItemToCart: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        clearItemFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },

        removeItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload.id
                    );
                }
            }
        },
    },
});

export const { addItemToCart, showDropdown, clearItemFromCart, removeItem } =
    cartSlice.actions;
export default cartSlice.reducer;
