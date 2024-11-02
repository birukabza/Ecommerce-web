import "./SignIn.scss";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInWithGoogle, auth } from "../../firebase/firebase.utility";
import { signInWithEmailAndPassword } from "firebase/auth";

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
        }catch(error){
            console.log("Error while Signing up", error.message)
        }
    }

    function handleGoogleSignIn(e){
        e.preventDefault();
        
        SignInWithGoogle()
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
