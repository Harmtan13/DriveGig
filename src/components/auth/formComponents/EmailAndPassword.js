import React from 'react';

export default function EmailAndPassword({ email, setEmail, password, setPassword }) {
  return (
    <>
      <label htmlFor = "email">
        <input
          type = "text"
          name = "email"
          placeholder = "Email"
          onChange = {e => setEmail(e.target.value)}
          value = {email}
        />
      </label>

      <br />
      <br />

      <label htmlFor = "password">
        <input
          type = "password"
          name = "password"
          placeholder = "Enter Password"
          onChange = {e => setPassword(e.target.value)}
          value = {password}
        />
      </label>
    </>
  );
}