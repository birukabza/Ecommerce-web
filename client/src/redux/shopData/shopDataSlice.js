import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopData: [],
    isLoading: true,
    error: null,
}

const shopDataSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setShopData: (state, action) => {
            state.shopData = action.payload
            state.isLoading = false
        },
        setLoading: (state, action) =>{
            state.isLoading = action.payload
        },
        setError: (state, action)=>{
            state.error = action.payload
            state.isLoading = false
        }
    }
}) 

export const {setShopData, setError, setLoading} = shopDataSlice.actions
export default shopDataSlice.reducer