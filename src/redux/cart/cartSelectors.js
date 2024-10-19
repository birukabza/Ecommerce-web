import { createSelector } from "reselect";

export const selectShowDropDown = (state) => state.cart.show;

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
);

export const selectCartTotalQuantity = createSelector(
    [selectCartItems],
    (CartItems) =>
        CartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (CartItems) =>
        CartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
);
