import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function HomeSummary({ currentUser, logout }) {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push('login');
  };

  return (
    <>
      <h1>HomeSummary baby!</h1>
      <Link to = "/start-shift">Start Shift</Link>
    </>
  );
}