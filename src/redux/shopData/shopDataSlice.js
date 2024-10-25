import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopData: []
}

const shopDataSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setShopData: (state, action) => {
            state.shopData = action.payload
        }
    }
}) 

export const {setShopData} = shopDataSlice.actions
export default shopDataSlice.reducer