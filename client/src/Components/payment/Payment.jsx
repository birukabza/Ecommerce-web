import { useEffect, useState } from "react";
import CheckoutForm from "../checkout-form/CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../redux/cart/cartSelectors";

const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const cartTotalPrice = useSelector(selectCartTotalPrice);
    
    useEffect(() => {
        const fetchPublishableKey = async () => {
            try {
                const response = await fetch("http://localhost:5000/config");
                
                if (!response.ok) {
                    throw new Error("Failed to fetch publishable key");
                }
                
                const data = await response.json();
                setStripePromise(loadStripe(data.publishableKey));
            } catch (error) {
                console.log("Error fetching publishable key:", error.message);
            }
        };

        fetchPublishableKey(); 
    }, []);

    useEffect(() => {
        const createPaymentIntent = async () => {
            if (!cartTotalPrice) return;

            try {
                const response = await fetch("http://localhost:5000/create-payment-intent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: cartTotalPrice * 100 }),
                });

                if (!response.ok) {
                    throw new Error("Failed to create payment intent");
                }

                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.log("Error creating payment intent:", error.message);
            }
        };

        createPaymentIntent();
    }, [cartTotalPrice]);

    return (
        <div className="payment">
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default Payment;
