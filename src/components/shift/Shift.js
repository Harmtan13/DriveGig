import React, { useState } from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'
import ShiftStart from './ShiftStart';

export default function Shift({history}) {
  const [odometer, setOdometer] = useState('');

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/shift' 
          render = {() => (<ShiftStart 
            odometer={odometer} 
            setOdometer={setOdometer}
            history={history} 
          />)}
          />
          </Switch>
      </Router>
    </>
  )
}