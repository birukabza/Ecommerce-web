import { createSelector } from "reselect";


const selectShop = (state) => state.shop.shopData;

export const selectShopData = createSelector(
    [selectShop],
    (shopData) => (
        shopData.map(data => ({
            ...data,
            routeName: data.title.toLowerCase()
        }))
    )
)