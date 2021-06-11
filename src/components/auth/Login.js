import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import EmailAndPassword from './formComponents/EmailAndPassword';

export default function Login({ login, setIsLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const emailAndPasswordState = {
    email,
    setEmail,
    password,
    setPassword,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await login(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <h1>Login to DriveGig</h1>

        <br />
        <br />

        <EmailAndPassword {...emailAndPasswordState} />

        <br />
        <br />

        <button type = "submit">Login</button>
      </form>

      <br />

      <div>
        <Link to = "/account/forgot-password">Forgot Password?</Link>

      </div>

      <div>
        Need to create an Account?
        {' '}
        <Link to = "/account/signup">Sign Up</Link>
      </div>
    </>
  );
}