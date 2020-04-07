import React, { useState } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import StartShift from './StartShift';
import PauseShift from './PauseShift';
import EndShift from './EndShift';
import MainShift from './MainShift';
import Trip from '../trip/Trip';


export default function Shift({history}) {
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || {
    odometer: []
  });

  return (
    <>
      <Switch>
        <Route
            exact
            path='/shift'
            render = {() => (
              <StartShift
                shift = {shift}
                setShift = {setShift}
            />
            )}
          />

          <Route
            path='/shift/main' 
            render= {() => (
              <MainShift
              shift= {shift}
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
        </Switch>
    </>
  )
}