import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile({logout}) {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push('login');
  };

  return (
    <>
      <h1>Profile</h1>
      <p onClick = {handleLogout}>Logout</p>
    </>
  )
}