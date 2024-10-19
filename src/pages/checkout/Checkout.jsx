import "./Checkout.scss";

import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cartSelectors";

import { useSelector } from "react-redux";

const Checkout = () => {

    const cartItems = useSelector(selectCartItems)
    const CartTotalPrice = useSelector(selectCartTotalPrice)

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div><div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItems.map(cartitem=>cartitem.name)
            }
            <div className="total">
                {CartTotalPrice}
            </div>
        </div>
    )
}

export default Checkout;
