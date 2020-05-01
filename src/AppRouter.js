import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'

import Nav from './Nav';
import Home from './components/Home';
import Gasform from './components/gas/GasForm';
import Stats from './components/stats/Stats';
import StartShift from './components/shift/01-StartShift';
import MainShift from './components/shift/02-MainShift'
import PauseShift from './components/shift/03-PauseShift';
import EndShift from './components/shift/04-EndShift';
// import Trip from './components/shift/trip/01-TripRouter';

export default function AppRouter(shiftState) {
  return (
  <Router>
    <Nav/>
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Home {...shiftState}/>
          </Route>

          <Route path='/start-shift' >
            <StartShift {...shiftState} />
          </Route>

          <Route exact path='/shift' >
            <MainShift {...shiftState} />
          </Route>

          {/* <Route path='/shift'>
            <Trip/>
          </Route> */}

          <Route path='/shift-paused'>
            <PauseShift {...shiftState}/>
          </Route>

          <Route path='/end-shift'>
            <EndShift/>
          </Route>

          <Route path='/gas'>
            <Gasform/>
          </Route>

          <Route path='/statistics'>
            <Stats/>
          </Route>
        </Switch>
      </div>
  </Router>
  )
}