import React from 'react';
import {
  Route,
} from 'react-router-dom';

import Gasform from './components/gas/GasForm';
import Stats from './components/stats/Stats';
import StartShift from './components/shift/01-StartShift';
import TripRouter from './components/shift/trip/01-TripRouter';
import PauseShift from './components/shift/03-PauseShift';
import EndShift from './components/shift/04-EndShift';

export default function AppRouter(shiftState) {
  return (
    <>
      <Route path = "/start-shift">
        <StartShift {...shiftState} />
      </Route>

      <Route path = "/shift">
        <TripRouter {...shiftState} />
      </Route>

      <Route path = "/shift-paused">
        <PauseShift {...shiftState} />
      </Route>

      <Route path = "/end-shift">
        <EndShift {...shiftState} />
      </Route>

      <Route path = "/gas">
        <Gasform />
      </Route>

      <Route path = "/statistics">
        <Stats />
      </Route>
    </>
  );
}