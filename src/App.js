import React, { useState } from 'react';

import './App.css';
import AppRouter from './AppRouter';

export default function App() {
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || {
    odometer: []
  });

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