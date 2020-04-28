import React from 'react'
import NewTrip from '../trip/NewTrip';
import { determinePlacement, addTimeStamp} from '../../helpers/AppHelpers'
import { Link } from 'react-router-dom';

export default function MainShift({shift, setShift}) {
  console.log(shift);

  const pauseShift = () => {
    addTimeStamp(determinePlacement, setShift, shift);
  }

  return (
    <div>
      <h1>Hello from Trip!</h1>

    <Link to="paused">
      <button 
        onClick = {pauseShift}
      >
        Pause Shift
      </button>
    </Link>

    <Link to='/shift/main'>
      <button 
        onClick={() => console.log('Shift Paused')}
      >
        End Shift
      </button>
    </Link>

      <NewTrip/>
    </div>
  )
}