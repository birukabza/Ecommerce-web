import "./Checkout.scss";
import {
    selectCartItems,
    selectCartTotalPrice,
} from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { useSelector } from "react-redux";
import CheckoutItem from "../../Components/checkout-item/CheckoutItem";
import Payment from "../../Components/payment/Payment";
import CustomButton from "../../Components/custom-button/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { CloseButton } from "@mantine/core";

const customStylesForPaymentModal = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const customStylesForSignInNoticeModal = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    },
};

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotalPrice = useSelector(selectCartTotalPrice);
    const currentUser = useSelector(selectCurrentUser); 
    const navigate = useNavigate();

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isSignInNoticeOpen, setIsSignInNoticeOpen] = useState(false);

    const openPaymentModal = () => {
        if (currentUser) {
            setIsPaymentModalOpen(true);
        } else {
            setIsSignInNoticeOpen(true); 
        }
    };

    const closePaymentModal = () => setIsPaymentModalOpen(false);
    const closeSignInNotice = () => setIsSignInNoticeOpen(false);

    const redirectToSignIn = () => {
        closeSignInNotice();
        navigate("/signin", { state: { from: "/checkout" } });
    };

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">Total: ${cartTotalPrice}</div>

            <div className="test-warning">
                <p>Please Use the following for testing</p>
                <br />
                Card number: 4242424242424242
                <br />
                Exp. date: any future date
                <br />
                CVC: any three-digit number
            </div>

            <CustomButton onClick={openPaymentModal}>Proceed To Payment</CustomButton>

            <Modal
                isOpen={isPaymentModalOpen}
                onRequestClose={closePaymentModal}
                contentLabel="Payment Modal"
                style={customStylesForPaymentModal}
            >
                <CloseButton
                    onClick={closePaymentModal}
                    style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        color: "red",
                        width: "40px", 
                        height: "40px",
                    }}
                    aria-label="Close modal"
                />
                <Payment />
            </Modal>

            <Modal
                isOpen={isSignInNoticeOpen}
                onRequestClose={closeSignInNotice}
                contentLabel="Sign-In Notice"
                style={customStylesForSignInNoticeModal}
            >
                <div>
                    <p>You need to sign in to proceed with the payment.</p>
                    <br />
                    <CustomButton onClick={redirectToSignIn}>Go to Sign In</CustomButton>
                </div>
            </Modal>
        </div>
    );
};


export default Checkout;
