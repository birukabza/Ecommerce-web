import StripeCheckout from "react-stripe-checkout";
import logo from '../../assets/Logo.svg'


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51QCOklFvw3YOYxiKlJ814e0Fd349MVA98nrU4z1X53MTsGtVKq70Edh31ltfyEstLO3QYBs3sfMJOwlqcHFfrWte00YrwjOIIe"

    const handleOnToken = (token) => {
        console.log(token)
        alert("Payment Succceful")
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="Any Store"
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={handleOnToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
