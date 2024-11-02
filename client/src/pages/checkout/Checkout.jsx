import "./Checkout.scss";

import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cartSelectors";

import { useSelector } from "react-redux";

import CheckoutItem from "../../Components/checkout-item/CheckoutItem";

import StripeButton from "../../Components/stripe-button/StripeButton";


const Checkout = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotalPrice = useSelector(selectCartTotalPrice)

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
                cartItems.map(cartItem=>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className="total">
                Total: ${cartTotalPrice}
            </div>

            <div className="test-warning">
                <p>Please Use the following for testing</p>
                <br />
                Card number: 4242424242424242
                <br />
                exp.date: any future date
                <br />
                CVC: any three digit number

            </div>

            <StripeButton price={cartTotalPrice}/>

        </div>
    )
}

export default Checkout;
