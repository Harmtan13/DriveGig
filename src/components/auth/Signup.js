import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';


import EmailAndPassword from './formComponents/EmailAndPassword';

export default function Signup({ signUp }) {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();

  const emailAndPasswordState = {
    email,
    setEmail,
    password,
    setPassword,
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setClients([...clients, e.target.value]);
    } else {
      setClients(clients.filter(client => client !== e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConf) {
      return console.log('Passwords do not match');
    }

    const signUpInfo = {
      firstName,
      lastName,
      email,
      password,
      clients,
    };

    try {
      setError('');
      await signUp(signUpInfo);

      console.log('Connected Baby!');
      history.push('/');
    } catch {
      console.log("Shucks, it didn't work");
    }
  };

  return (
    <div>
      <h1>Create DriveGig account</h1>

      <br />
      <br />


      <form onSubmit = {handleSubmit}>
        <label htmlFor = "firstName">
          <input
            type = "text"
            name = "firstName"
            placeholder = "First Name"
            onChange = {e => setfirstName(e.target.value)}
            value = {firstName}
          />
        </label>

        <br />
        <br />

        <label htmlFor = "lastName">
          <input
            type = "text"
            name = "lastName"
            placeholder = "Last Name"
            onChange = {e => setlastName(e.target.value)}
            value = {lastName}
          />
        </label>

        <br />
        <br />

        <EmailAndPassword {...emailAndPasswordState} />

        <br />
        <br />

        <label htmlFor = "passwordConf">
          <input
            type = "password"
            name = "passwordConf"
            placeholder = "Confirm Password"
            onChange = {e => setPasswordConf(e.target.value)}
            value = {passwordConf}
          />
        </label>

        <br />
        <br />

        <label htmlFor = "drivingClients">
          <input
            type = "checkbox"
            name = "DrivingClient"
            value = "Uber Eats"
            onChange = {handleCheckbox}
          />
          {' '}
          Uber Eats
        </label>

        <br />
        <br />

        <label htmlFor = "drivingClients">
          <input
            type = "checkbox"
            name = "DrivingClient"
            value = "UberX"
            onChange = {handleCheckbox}
          />
          {' '}
          Uber Rideshare
        </label>

        <br />
        <br />

        <label htmlFor = "drivingClients">
          <input
            type = "checkbox"
            name = "DrivingClient"
            value = "Doordash"
            onChange = {handleCheckbox}
          />
          {' '}
          Doordash
        </label>

        <br />
        <br />

        <label htmlFor = "drivingClients">
          <input
            type = "checkbox"
            name = "DrivingClient"
            value = "Grubhub"
            onChange = {handleCheckbox}
          />
          {' '}
          Grubhub
        </label>

        <br />
        <br />

        <label htmlFor = "drivingClients">
          <input
            type = "checkbox"
            name = "DrivingClient"
            value = "Postmates"
            onChange = {handleCheckbox}
          />
          {' '}
          Postmates
        </label>

        <br />
        <br />

        <label htmlFor = "drivingClients">
          <input
            type = "checkbox"
            name = "DrivingClient"
            value = "Lyft"
            onChange = {handleCheckbox}
          />
          {' '}
          Lyft
        </label>

        <br />
        <br />

        <button type = "submit">Sign Up</button>

        <br />
        <br />

        <div>
          Already have an account?
          {' '}
          <Link to = "/login">Log In</Link>
        </div>

      </form>
    </div>
  );
}