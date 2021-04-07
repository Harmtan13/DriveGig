import React, { useState } from 'react';

export default function Signup() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [drivingClients, setDrivingClients] = useState([]);

  console.log(drivingClients);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setDrivingClients([...drivingClients, e.target.value]);
    } else {
      setDrivingClients(drivingClients.filter(client => client !== e.target.value));
    }
  };

  return (
    <>

      <h1>Create DriveGig account</h1>

      <label htmlFor = "firstName">
        <input
          type = "text"
          name = "firstName"
          placeholder = "First Name"
          onChange = {e => setUserFirstName(e.target.value)}
          value = {userFirstName}
        />
      </label>

      <label htmlFor = "lastName">
        <input
          type = "text"
          name = "lastName"
          placeholder = "Last Name"
          onChange = {e => setUserLastName(e.target.value)}
          value = {userLastName}
        />
      </label>

      <label htmlFor = "email">
        <input
          type = "text"
          name = "email"
          placeholder = "Email"
          onChange = {e => setUserEmail(e.target.value)}
          value = {userEmail}
        />
      </label>

      <label htmlFor = "password">
        <input
          type = "password"
          name = "password"
          placeholder = "Enter Password"
          onChange = {e => setPassword(e.target.value)}
          value = {password}
        />
      </label>

      <label htmlFor = "passwordConf">
        <input
          type = "password"
          name = "passwordConf"
          placeholder = "Confirm Password"
          onChange = {e => setPasswordConf(e.target.value)}
          value = {passwordConf}
        />
      </label>

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
    </>
  );
}