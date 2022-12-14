import React, { useState } from 'react';
// import { signIn } from '../../services/apiUsers';
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';

const userSignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  let onUnameChange = (e) => setFirstName(e.target.value);
  let onPasswordChange = (e) => setPassword(e.target.value);

  let database = {
    uname: 'abraham',
    upass: 'test'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName == database.uname && password == database.upass) {
      return console.log('succesful');
    } else {
      console.log('TRY AGAIN');
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">
          UserName
          <input
            name="uname"
            required
            value={firstName}
            onChange={onUnameChange}
            id="uname"
          />
        </label>
        <br />

        <label htmlFor="upass">
          password
          <input
            name="upass"
            id="upass"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default userSignIn;
