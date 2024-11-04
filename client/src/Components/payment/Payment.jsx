import { useEffect , useState} from "react"

import CheckoutForm from "../checkout-form/CheckoutForm"

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios"

import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../redux/cart/cartSelectors";

const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const cartTotalPrice = useSelector(selectCartTotalPrice);
    
    useEffect( ()=>{
        const fetchPublishableKey = async () => {

            try {
                const response = await axios.get("http://localhost:5000/config");
                const { publishableKey } = response.data;
                setStripePromise(loadStripe(publishableKey));


            }catch(error){
                console.log("Error fetching publishable Key", error.message)
            }

        }
    fetchPublishableKey(); 
    }, [])

    useEffect(()=>{
        const createPaymentIntent = async () => {
            if(!cartTotalPrice){
                return;
            }
            try{

              const response = await axios.post("http://localhost:5000/create-payment-intent", { amount: cartTotalPrice * 100 });
                const {clientSecret} = response.data;
                setClientSecret(clientSecret)
            }catch (error){
                console.log("Error creating payment intent in client", error.message)
            }
        }

        createPaymentIntent();
    }, [cartTotalPrice])


  return (
    <div className="payment">
      {
        clientSecret && stripePromise && (
      <Elements stripe={stripePromise} options={{clientSecret}}>
        <CheckoutForm />
      </Elements>

    )
      }
    </div>
  )
}

export default Payment
