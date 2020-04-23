import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'

import Nav from './Nav';
import Home from './components/Home';
import ShiftRouter from './components/shift/ShiftRouter';
import Gasform from './components/gas/GasForm';
import Stats from './components/stats/Stats';

export default function AppRouter(shiftState) {
  return (
  <Router>
    <Nav/>
      <div className="container">
        <Switch>
          <Route exact 
            path='/' 
            render={() => (
              <Home
                {...shiftState}
              />
            )}
          />

          <Route
            path='/shift' 
            render={() => (
              <ShiftRouter
                {...shiftState}
              />
            )}
          />

          <Route 
            path='/gas' 
            component={Gasform}
          />

          <Route 
            path='/statistics' 
            render={() => (
              <Stats
                {...shiftState}
              />
            )}
          />
        </Switch>
      </div>
  </Router>
  )
}