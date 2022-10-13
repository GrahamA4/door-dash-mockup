import React, { useState } from 'react';

export const User = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  let onUnameChange = (e) => setUserName(e.target.value);
  let onPasswordChange = (e) => setPassword(e.target.value);

  let database = {
    uname: 'abraham',
    upass: 'test'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName == database.uname && password == database.upass) {
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
            value={userName}
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
