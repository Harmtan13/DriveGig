import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function HomeSummary({ currentUser, logout }) {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('login');
    } catch {}
  };

  return (
    <>
      <h1>HomeSummary baby!</h1>
      <p>{JSON.stringify(currentUser)}</p>

      <div>
        Need to create an Account?
        {' '}
        <button onClick = {handleLogout}> Log Out</button>
      </div>
    </>
  );
}