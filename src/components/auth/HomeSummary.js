import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function HomeSummary({ currentUser, logout, stage }) {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push('login');
  };

  const determineLink = () => (stage ? '/resume-shift' : '/active-shift/start');
  const determineText = () => (stage ? 'Resume Shift' : 'Start Shift');

  return (
    <>
      <h1>HomeSummary baby!</h1>
      <Link to = {determineLink()}>{determineText()}</Link>

      <br />
      <br />
      <br />

      <p onClick = {handleLogout}>Logout</p>
    </>
  );
}