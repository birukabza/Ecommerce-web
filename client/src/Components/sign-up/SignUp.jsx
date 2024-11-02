import './SignUp.scss'

import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utility'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useState } from 'react'

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    async function handleSubmit(e) {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = userInfo

        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, { displayName });

            setUserInfo({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: '',
            });

        }catch(error){
            console.log("Error signing up", error.message)   
        }

    }

    function handleChange (e){
        const {name, value} = e.target

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
                <FormInput
                    type="password"
                    label="Password"
                    onChange={handleChange}
                    value={userInfo.password}
                    name="password"
                    required
                />
                <FormInput
                    type="password"
                    label="Confirm Password"
                    onChange={handleChange}
                    value={userInfo.confirmPassword}
                    name="confirmPassword"
                    required
                />
                <CustomButton type="submit"> Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp

