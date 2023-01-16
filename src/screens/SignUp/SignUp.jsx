import { useState, useEffect } from "react";
import { signUp } from "../../services/apiUsers"
import { useNavigate } from 'react-router-dom'

const SignUp = (props) =>{
    const history = useNavigate()

    useEffect(() => {
        props.setScreen('sign-up')
    }, )

const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    isError: false,
    errorMsg: '',
})

const handleChange = (event) => setForm({
    ...form,[event.target.name]: event.target.value,
})

const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try{
        const user = await signUp(form)
        setUser(user)
        history('/')
    }catch (error) {
        console.error(error)
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isError: true,
            errorMsg: 'Sign Up Details Invalid'
        })
    }
}

const renderError = () => {
    const toggleForm = form.isError ? 'danger form-submit-button-su' : 'form-submit-buttom-su'
    if (form.isError){
        return (
            <button type ='submit' className={toggleForm}>{form.errorMsg}</button>
        )
    }else {
        return <button type="submit" className="form-submit-button-su">Sign Up</button>
    }
}

const { firstName, lastName, email, password} = form

return (
<div className="forms-screen-su">
    <div className="auth-forms-card-su"></div>
    <h3 className="form-title-su">Sign Up</h3>
    <form onSubmit={onSignUp} className='auth-form-su'>

        <div className="form-label-input-su">
            <div className="label-div-su">
                <label>FirstName:</label>
            </div>
            <input required type='text' name='firstName' className="form-input-su" value={firstName} placeholder='Enter FirstName' onChange={handleChange}>
            </input>
        </div>

        <div className="form-label-input-su">
            <div className="label-div-su">
                <label>LastName:</label>
            </div>
            <input required type='text' name='lastName' className="form-input-su" value={lastName} placeholder='Enter lastName' onChange={handleChange}>
            </input>
        </div>


        <div className='form-label-input-div-su'>
              <div className="label-div-su">
                <label>Email address:</label>
              </div>
              <input
                required
                type='email'
                name='email'
                className= 'form-input-su'
                value={email}
                placeholder='Enter email'
                onChange={handleChange}
              />
            </div>

        <div className='form-label-input-div-su'>
              <div className="label-div-su">
                <label>Password:</label>
              </div>
              <input
                required
                name='password'
                value={password}
                type='password'
                className= 'form-input-su'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>
            {renderError()}
    </form>
</div>
)
}


export default SignUp