import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function HomeSummary({ currentUser, stage }) {
  const history = useHistory();

  const determineLink = () => (stage ? '/resume-shift' : '/start-shift');
  const determineText = () => (stage ? 'Resume Shift' : 'Start Shift');

  return (
    <>
      <h1>HomeSummary baby!</h1>
      <Link to = {determineLink()}>{determineText()}</Link>
    </>
  );
}