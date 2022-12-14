import { useState } from 'react'

export const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [submitted, setSubmitted] = useState("False")

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
}
// This function validates the input 
const handleFirstName = (e) => {
    setFirstName(e.target.value)
    if (e.target.value.length <1) {
        setFirstNameError("Hello, first name is required")
    }   else if (e.target.value.length <4) {
        setFirstNameError("First name must be at least 4 characters")
    }   else {
        setFirstNameError("")
    }
}
const handleLastName = (e) => {
    setLastName(e.target.value)
    if (e.target.value.length <1) {
        setLastNameError("Hello, last name is required")
    }   else if (e.target.value.length <4) {
        setLastNameError("Last name must be at least 4 characters")
    }   else {
        setLastNameError("")
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value)
    if (e.target.value.length <1) {
        setEmailError("Hello, email is required")
    }   else if (e.target.value.length <8) {
        setEmailError("Email must be at least 8 characters")
    }   else {
        setEmailError("")
    }
}

const handlePassword = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length <1) {
        setPasswordError("Hello, password is required")
    }   else if (e.target.value.length <8) {
        setPasswordError("Password must be at least 8 characters")
    }   else {
        setPasswordError("")
    }
}

const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    if (e.target.value.length <1) {
        setConfirmPasswordError("Hello, password is required")
    }   else if (e.target.value.length <8) {
        setConfirmPasswordError("Password must be at least 8 characters")
    }   else {
        setConfirmPasswordError("")
    }
}

const createUser = (e) => {
    e.preventDefault()
    const newUser = { firstName, lastName, email, password, confirmPassword }
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setSubmitted(true)
    }

return (
    <div>
        <form onSubmit={ createUser } >
            { submitted ?
                <h2>Your input has been received, thank you</h2>:
                <h2>Hey there, please submit the form</h2>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange= { handleFirstName }></input>
            {
                firstNameError ? 
                <p> { firstNameError }</p> : undefined
            }
            </div>
            
            <div>
                <label>Last Name: </label>
                <input type="text" onChange= { handleLastName }></input>
            {
                lastNameError ? 
                <p> { lasNameError }</p> : undefined
            }
            </div>
            
            <div>
                <label>Email: </label>
                <input type="text" onChange= { handleEmail }></input>
            {
                emailError ? 
                <p> { emailError }</p> : undefined
            }
            </div>
            
            <div>
                <label>Password: </label>
                <input type="text" onChange= { handlePassword }></input>
            {
                passwordError ? 
                <p> { passwordError }</p> : undefined
            }
            </div>
            
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange= { handleConfirmPassword }></input>
            </div>
            {
                confirmPasswordError ? 
                <p> { confirmPasswordError }</p> : undefined
            }
            <input type="submit" value="Create User"></input>
        </form>
        <div> 
            <ul>
                <li>First Name: { firstName }</li>
                <li>Last Name: { lastName }</li>
                <li>Email: { email }</li>
                <li>Password { password }</li>
                <li> Confirm Password: {confirmPassword }</li>
            </ul>
        </div>
    </div>
)
export default form 
