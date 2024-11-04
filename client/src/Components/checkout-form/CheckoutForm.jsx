import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useState } from "react";

import CustomBotton from "../custom-button/CustomButton";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }
        setIsProcessing(true);
        setMessage("");
        const { error } = await stripe.confirmPayment({
            elements,
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message); 
            } else {
                setMessage("An unexpected error occurred."); 
            }
        } else {
            setMessage("Payment successful!"); 
            alert("yay")
        }

        setIsProcessing(false);

    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement/>
            {message && <p className="message">{message}</p>}
            <CustomBotton type="Submit" disabled={isProcessing || !stripe || !isProcessing} >
                {isProcessing ? "Processing ... " : "Pay now"}
            </CustomBotton>
            
        </form>
    )
}

export default CheckoutForm
