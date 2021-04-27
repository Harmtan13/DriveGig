import React, { useState, useEffect } from 'react';
import {
  Route,
} from 'react-router-dom';

import { createShift } from '../../helpers/CreationHelpers';
import StartShift from './01-StartShift';
import TripRouter from './trip/01-TripRouter';
import PauseShift from './03-PauseShift';
import EndShift from './04-EndShift';

export default function ShiftRouter({ currentUser }) {
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || createShift());
  const [shifts, setShifts] = useState(JSON.parse(localStorage.getItem('shifts')) || []);

  const shiftState = {
    shift,
    setShift,
  };

  useEffect(() => {
    if (shift.completed) {
      localStorage.clear();
      localStorage.setItem('shifts', JSON.stringify([...shifts, shift]));
      setShifts([...shifts, shift]);
    }
  }, [shift]);

  return (
    <>
      <Route path = "/start-shift">
        <StartShift {...shiftState} />
      </Route>

      <Route path = "/shift">
        <TripRouter
          {...shiftState}
          currentUser = {currentUser}
        />
      </Route>

      <Route path = "/shift-paused">
        <PauseShift {...shiftState} />
      </Route>

      <Route path = "/end-shift">
        <EndShift {...shiftState} />
      </Route>
    </>
  );
}