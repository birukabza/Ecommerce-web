import { createSelector } from "reselect";

const selectCart = (state) => (state.cart)


export const selectCartItems = createSelector(
    [selectCart],
    (cart)=> cart.items
)

export const selectCartTotalQuantity = createSelector(
    [selectCartItems],
    (CartItems)=> CartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
)