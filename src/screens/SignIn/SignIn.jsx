import { useState, useEffect } from "react";
import { signIn } from '../../services/apiUsers';
import { useNavigate } from 'react-router-dom';


const SignIn = (props) => {
  const history = useNavigate()


  useEffect(() => {
    props.setScreen('sign-in')
  }, [])

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      console.log(user)
      history('/')
    } catch (error) {
      console.log(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger form-submit-button-si' : 'form-submit-button-si'
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    }else {
      return <button type='submit' className="form-submit-button-si btn-reg">Sign In</button>
    }
  }

  const {email, password} = form

  return (
    <section>
      <form onSubmit={onSignIn}>
        <label htmlFor="uname">
          UserName
          <input
            required
            type='text'
            name="email"
            value={email}
            id="uname"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </label>
        <br />

        <label htmlFor="upass">
          password
          <input
            required
            name="password"
            id="upass"
            value={password}
            type="password"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default SignIn;
