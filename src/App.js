import React, { useState } from 'react';
import createShift from './helpers/CreateShift';
import './App.css';
import AppRouter from './AppRouter';

export default function App() {
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || createShift());

  const shiftState = {
    shift, 
    setShift
  }

  return (
    <>
      <AppRouter
        {...shiftState}
      />
    </>
  );
}