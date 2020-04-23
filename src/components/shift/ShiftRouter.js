import React from 'react';
import {Route} from 'react-router-dom';

import StartShift from './StartShift';
import PauseShift from './PauseShift';
import EndShift from './EndShift';
import MainShift from './MainShift';
import Trip from '../trip/Trip';

export default function ShiftRouter(shiftState) {
  return (
    <>
      <Route
        exact
        path='/shift'
        render ={() => (
          <StartShift
          {...shiftState}
          />
        )}
      />

      <Route
        path='/shift/main' 
        render= {() => (
          <MainShift
          {...shiftState}
          />
        )}
      />

      <Route
        path='/shift/trip'
        render = {() => (
          <Trip
          />
        )}
      />

      <Route
        path='/shift/paused'
        render = { () => (
          <PauseShift
          />
        )}
      />

      <Route
        path='/shift/end'
        render = { () => (
          <EndShift
          />
        )}
      />
    </>
  )
}