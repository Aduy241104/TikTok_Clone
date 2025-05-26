import { useState } from "react"

function Register() {
    const [step, setStep] = useState(1); //1 -> đăng kí 2 -> xác thực otp
    const [signUpData, setSignUpData] = useState({
        email: "",
        password: ""
    });
    const [otp, setOtp] = useState("");


    const handleChangeSignUpData = (e) => {
        setSignUpData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    const hanleChangeStep = () => {
        setStep(prev => prev + 1);
    }


    const renderSignUpForm = () => {
        return (
            <div>
                <h1>Sign Up</h1>
                <input type="text" name="email" onChange={ (e) => handleChangeSignUpData(e) } />
                <input type="text" name="password" onChange={ (e) => handleChangeSignUpData(e) } />
                <h2>email: { signUpData.email }</h2>
                <h2>pass: { signUpData.password }</h2>
                <button onClick={ hanleChangeStep }>Sign up</button>
            </div>
        )
    }

    const renderVerifyOtpForm = () => {
        return (
            <div>
                <input type="text" name="otp" onChange={ (e) => setOtp(e.target.value) } />
                <h2>Otp: { otp }</h2>
                <h2>email: { signUpData.email }</h2>
                <button>Submit</button>
            </div>
        )
    }

    return (
        <>
            { (step === 1) ? (renderSignUpForm()) : (renderVerifyOtpForm()) }
        </>
    )
}

export default Register