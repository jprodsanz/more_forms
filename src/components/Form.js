import { useState } from 'react'

export const Form = (props)=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    // This function will validate the input for this particular field of the form
    const handleFirstName = (e)=> {
        setFirstName(e.target.value)
        if(e.target.value.length < 1) { 
            setFirstNameError("First name is required!")
        } else if (e.target.value.length < 3) {
            setFirstNameError("First name must be at least 3 characters.")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastName = (e)=> {
        setLastName(e.target.value)
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!")
        } else if (e.target.value.length < 3) {
            setLastNameError("Last name must be at least 3 characters.")
        } else {
            setLastNameError("")
        }
    }

    const handleEmail = (e)=> {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Email is required!")
        } else if (e.target.value.length < 3) {
            setEmailError("Email must be at least 10 characters.")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e)=> {
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!")
        } else if (e.target.value.length < 5) {
            setPasswordError("Password must be at least 5 characters.")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e)=> {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!")
        } else if (e.target.value.length < 5) {
            setConfirmPasswordError("Confirm Password must be at least 5 characters.")
        } else if (e.target.value != password) {
            setConfirmPasswordError("Passwords must match!")
        } else {
            setConfirmPasswordError("")
        }
    }

    const createUser = (e)=> {
        e.preventDefault()
        const newUser = { firstName, lastName, email, password, confirmPassword }
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setHasBeenSubmitted(true)
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome! Please submit the form!</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName }></input>
                    {
                        firstNameError ? 
                        <p>{ firstNameError }</p> : undefined
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName }></input>
                </div>
                {
                        lastNameError ? 
                        <p>{ lastNameError }</p> : undefined
                }
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail }></input>
                </div>
                {
                    emailError ?
                    <p>{ emailError }</p> : undefined
                }
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword }></input>
                </div>
                {
                    passwordError ?
                    <p>{ passwordError }</p> : undefined
                }
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmPassword }></input>
                </div>
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> : undefined
                }
                <input type="submit" value="Create User"></input>
            </form>

            <div>
                <ul>
                    <li>First Name: { firstName }</li>
                    <li>Last Name: { lastName }</li>
                    <li>Email: { email }</li>
                    <li>Password: { password }</li>
                    <li>Confirm Password: { confirmPassword }</li>
                </ul>
            </div>
        </div>
    )
}

export default Form