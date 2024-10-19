import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    show: false
};

const cartSlice = createSlice(
    {
      name: "cart",
      initialState,
      reducers: {
        showDropdown: (state) => {
            state.show = !state.show
        },
        addItemToCart: (state, action) => {
            const existingItem = state.items.find(item=> item.id === action.payload.id)

            if (existingItem){
                existingItem.quantity+=1
            }
            else{
                state.items.push({...action.payload, quantity: 1})
            }
        },
       

      }

    }
)

export const {addItemToCart, showDropdown} = cartSlice.actions
export default cartSlice.reducer