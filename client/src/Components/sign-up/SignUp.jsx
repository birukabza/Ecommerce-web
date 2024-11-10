import './SignUp.scss'

import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utility'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useState } from 'react'

import Swal from "sweetalert2";

import  OpenEyeLogo  from "../../assets/eye-opened.svg";
import  ClosedEyeLogo  from "../../assets/eye-closed.svg";

import { useNavigate, useLocation } from 'react-router-dom';

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = userInfo

        if (password !== confirmPassword) {

            Swal.fire({
                title: 'Error!',
                text: "Passwords don't match",
                icon: 'error',
                confirmButtonText: 'Okay',
            })
            return
        }
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordPattern.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: "Password must be at least 6 characters long and contain both letters and numbers.",
                icon: 'error',
                confirmButtonText: 'Okay',
            })

            return
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, { displayName });

            setUserInfo({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            Swal.fire({
                title: 'Success!',
                text: 'Your account has been created successfully.',
                icon: 'success',
                confirmButtonText: 'Okay',
                timer: 2000,
            })
            const redirectPath = location.state?.from || "/";
            navigate(redirectPath)

        } catch (error) {
            console.log("Error signing up", error.message)
            let errorMessage = 'Something went wrong. Please try again.'

            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'The email address is already in use.'
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'The email address is not valid. Please enter a valid email.'
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'The password is too weak.'
            }

            Swal.fire({
                title: 'Error!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Okay',
            })
        }

    }

    function handleChange(e) {
        const { name, value } = e.target

        setUserInfo(prevUserInfo => (
            {
                ...prevUserInfo,
                [name]: value,
            }
        ))
    }

    return (
        <div className='sign-up'>
            <h2 className="title">I dont have an account</h2>
            <span>Sign Up with Your Email And Password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="Name"
                    onChange={handleChange}
                    value={userInfo.displayName}
                    name="displayName"
                    required
                />
                <FormInput
                    type="email"
                    label="Email"
                    onChange={handleChange}
                    value={userInfo.email}
                    name="email"
                    required
                />
                <div className="password-field">
                    <FormInput
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        onChange={handleChange}
                        value={userInfo.password}
                        name="password"
                        required
                    />
                    <span onClick={togglePasswordVisibility} className="toggle-password">
                        {showPassword ?
                            <img src={OpenEyeLogo} alt="close eye logo" />
                            :
                            <img src={ClosedEyeLogo} alt="open eye logo" />
                        }
                    </span>
                </div>
                <div className="password-field">
                    <FormInput
                        type={showPassword ? "text" : "password"}
                        label="Confirm Password"
                        onChange={handleChange}
                        value={userInfo.confirmPassword}
                        name="confirmPassword"
                        required
                    />
                    <span onClick={togglePasswordVisibility} className="toggle-password">
                        {showPassword ?
                            <img src={OpenEyeLogo} alt="close eye logo" />
                            :
                            <img src={ClosedEyeLogo} alt="open eye logo" />
                        }
                    </span>
                </div>
                <CustomButton type="submit"> Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp

