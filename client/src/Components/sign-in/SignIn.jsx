import "./SignIn.scss";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInWithGoogle, auth } from "../../firebase/firebase.utility";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            setUserInfo({email: "",
                password: "",})
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully signed in.",
                    icon: "success",
                    confirmButtonText: "Okay",
                    timer: 2000,
                });
        }catch(error){
            console.log("Error while Signing up", error.message)
            let errorMessage = "Something went wrong. Please try again.";

            if (error.code === "auth/user-not-found") {
                errorMessage = "No account found with this email address.";
            } else if (error.code === "auth/wrong-password") {
                errorMessage = "The password you entered is incorrect.";
            } else if (error.code === "auth/invalid-email") {
                errorMessage = "The email address is not valid.";
            }

            Swal.fire({
                title: "Error!",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Okay",
            });
        }
    }

    function handleGoogleSignIn(e){
        e.preventDefault();
        
        SignInWithGoogle().then((result)=>{
            Swal.fire({
                title: "Success!",
                text: "You have successfully signed in with Google.",
                icon: "success",
                confirmButtonText: "Okay",
                timer: 2000,
            });
        }).catch((error)=>{
            Swal.fire({
                title: "Error!",
                text: "Something went wrong with Google Sign-In. Please try again.",
                icon: "error",
                confirmButtonText: "Okay",
                
            });
        })
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    value={userInfo.email}
                    name="email"
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    value={userInfo.password}
                    name="password"
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                <CustomButton type="Submit">Sign In</CustomButton>
                <CustomButton onClick={handleGoogleSignIn} isGoogleSignIn>
                    Sign In With Google
                </CustomButton>
                
                </div>
            </form>
        </div>
    );
};

export default SignIn;
