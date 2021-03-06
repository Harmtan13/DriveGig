import React, { useState, useEffect } from 'react';
import {
  Route,
} from 'react-router-dom';

import { createShift, createStamps } from '../../helpers/CreationHelpers';
import PrivateRoute from '../routes/PrivateRoute';
import HomeSummary from './../../components/auth/HomeSummary';
import StartShift from './01-StartShift';
import TripRouter from './trip/01-TripRouter';
import PauseShift from './03-PauseShift';
import EndShift from './04-EndShift';

import sortedState from '../../helpers/trips/UpdateHelpers';
import {
  getSavedState,
  setSavedState,
} from '../../helpers/trips/TripHelpers';

export default function ShiftRouter({ currentUser, stage, setStage, addShiftsToUser }) {
  const [shift, setShift] = useState(
    getSavedState('shift') || createShift(currentUser?.totalShifts)
  );

  const [stamps, setStamps] = useState(
    getSavedState('shiftStamps') || createStamps()
  );

  const [shiftStageId, setShiftStageId] = useState(getSavedState('shiftStageId'));

  const updateShift = (shiftData) => {
    const {stageId, ...data} = shiftData;

    const sortProps = {
      ...data,
      trip: shift,
      trips: [],
      stamps
    }

    const { updatedTrip, updatedTrips, sortedStamps} = sortedState(sortProps);

    setShift(updatedTrip);
    setStamps(sortedStamps);
    if (stageId || stageId === null) setShiftStageId(stageId);

    setSavedState({
      shift: updatedTrip,
      shiftStamps: sortedStamps,
      shiftStageId: stageId || stageId === null ? stageId : shiftStageId
    })
  };

  useEffect(() => {
    if (shift.completed) {
      addShiftsToUser(shift);
      localStorage.clear();
    }
  }, [shift]);

  const shiftState = {
    shift,
    setShift,
    updateShift,
    shiftStageId,
    setShiftStageId,
    stage,
    setStage,
  };

  const userState = {
    currentUser
  }

  return (
    <>
      <PrivateRoute
        exact
        path = "/"
        component = {HomeSummary}
        userState = {userState}
      />

      <Route path = "/start-shift">
        <StartShift {...shiftState} 
        updateShift = {updateShift}
        />
      </Route>

      <Route path = "/shift">
        <TripRouter
          {...shiftState}
          currentUser = {currentUser}
          updateShift = {updateShift}
        />
      </Route>

      <Route path = "/pause-shift">
        <PauseShift {...shiftState} />
      </Route>

      <Route path = "/end-shift">
        <EndShift {...shiftState} />
      </Route>
    </>
  );
}