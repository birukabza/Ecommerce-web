import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useState } from "react";

import CustomBotton from "../custom-button/CustomButton";

import "./CheckoutForm.scss";

import Swal from "sweetalert2";


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
            redirect: "if_required",
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message); 
            } else {
                setMessage("An unexpected error occurred."); 
            }
        } else {
            setMessage("Payment successful!"); 
            Swal.fire({
                title: "Payment Successful!",
                text: "Your payment has been processed successfully.",
                icon: "success",
                confirmButtonText: "Great!",
                timer: 3000,
            });
        }

        setIsProcessing(false);

    }

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <PaymentElement/>
            {message && <p className="message">{message}</p>}
            <CustomBotton type="Submit" disabled={isProcessing || !stripe || !elements} >
                {isProcessing ? "Processing ... " : "Pay now"}
            </CustomBotton>      
        </form>
    )
}


export default CheckoutForm;
