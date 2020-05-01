import React from 'react'
import { determinePlacement, addTimeStamp} from '../../helpers/AppHelpers'
import { Link } from 'react-router-dom';
import NewTrip from './trip/NewTrip';
import { 
  Route,
  Switch
} from 'react-router-dom'

import ShiftRouter from './trip/01-TripRouter';

export default function MainShift({shift, setShift}) {
  console.log(shift); 

  const pauseShift = () => {
    addTimeStamp(determinePlacement, setShift, shift);
  }

  return (
    <Switch>
      <Route exact path='/shift'>
        <div>
          <h1>Hello from Trip!</h1>

          <Link to="/shift-paused">
            <button 
              onClick = {pauseShift}
            >
              Pause Shift
            </button>
          </Link>

          <Link to='/end-shift'>
            <button 
              onClick={() => console.log('Shift Paused')}
            >
              End Shift
            </button>
          </Link>

          <NewTrip/>
        </div>
      </Route>
      <ShiftRouter/>

    </Switch>
  )
}