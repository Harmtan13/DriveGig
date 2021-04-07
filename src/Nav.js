import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <Link to = "/">
        <h1>DriveGig</h1>
      </Link>
    </header>
  );
}