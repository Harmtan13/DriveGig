import React, { useState, useEffect } from 'react';
import {
  Route,
} from 'react-router-dom';

import { createShift, createStamps } from '../../helpers/CreationHelpers';
import StartShift from './01-StartShift';
import TripRouter from './trip/01-TripRouter';
import PauseShift from './03-PauseShift';
import EndShift from './04-EndShift';
import sortedState from '../../helpers/trips/UpdateHelpers';
import {
  tripSort,
  getSavedState,
  setSavedState,
  createStamp,
} from '../../helpers/trips/TripHelpers';

export default function ShiftRouter({ currentUser, stage, setStage }) {
  const [shifts, setShifts] = useState(
    JSON.parse(localStorage.getItem('shifts')) || []
  );

  const [shift, setShift] = useState(
    JSON.parse(localStorage.getItem('shift')) || createShift(shifts.length)
  );

  const [stamps, setStamps] = useState(
    getSavedState('shiftStamps') || createStamps()
  );

  const updateShift = (shiftData) => {
    const sortProps = {
      ...shiftData,
      trip: shift,
      trips: shifts,
      stamps
    }

    const { updatedTrip, updatedTrips, sortedStamps} = sortedState(sortProps);

    console.log(updatedTrips);

    setSavedState({
      shifts: updatedTrips,
      shift: updatedTrip,
      shiftStamps: sortedStamps
    })

    setShifts(updatedTrips);
    setShift(updatedTrip);
    setStamps(sortedStamps);
  };

  useEffect(() => {
    if (shift.completed) {
      localStorage.clear();
      localStorage.setItem('shifts', JSON.stringify([...shifts, shift]));
      setShifts([...shifts, shift]);
      console.log('completed');
    }
  }, [shift]);

  const shiftState = {
    shift,
    setShift,
    stage,
    setStage,
  };

  return (
    <>
      <Route path = "/active-shift/start">
        <StartShift {...shiftState} 
        updateShift = {updateShift}
        />
      </Route>

      <Route path = "/active-shift">
        <TripRouter
          {...shiftState}
          currentUser = {currentUser}
          updateShift = {updateShift}
        />
      </Route>

      <Route path = "/active-shift/pause">
        <PauseShift {...shiftState} />
      </Route>

      <Route path = "/active-shift/end">
        <EndShift {...shiftState} />
      </Route>
    </>
  );
}