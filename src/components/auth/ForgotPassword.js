import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword({ resetPassword }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');

      await resetPassword(email);
      setMessage('Check your inbox for Reset instructions');
    } catch (err) {
      setError('Error resetting password');
    }
  };

  return (
    <>
      <h1>Password Reset</h1>
      <br />
      {
        !message
        && (
        <form onSubmit = {handleSubmit}>
          {' '}
          {}
          <label htmlFor = "password">
            <input
              type = "text"
              name = "password"
              placeholder = "Enter Email"
              onChange = {e => setEmail(e.target.value)}
              value = {email}
            />
          </label>

          <br />
          <br />

          <button type = "submit">Send Password Reset Email</button>
        </form>
        )
      }

      <br />

      {message
      && (
      <div>
        <Link to = "/login"> Login Page</Link>
        <div>{message}</div>
      </div>
      )
       }

      <br />

      {error
      && <div>{error}</div>
      }

    </>
  );
}