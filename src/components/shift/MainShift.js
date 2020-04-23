import React from 'react'
import NewTrip from '../trip/NewTrip';
import { validateDataStamp } from '../../helpers/AppHelpers'
import { Link } from 'react-router-dom';

export default function MainShift({shift, setShift}) {
  console.log(shift);
  const pauseShift = () => {
    const timeStamp = Date.now();
    const timeStamps = validateDataStamp(shift, timeStamp);

    let updatedShift = {...shift, timeStamps};

    setShift(updatedShift);
    localStorage.setItem('shift', JSON.stringify(updatedShift));
  }

  return (
    <div>
      <h1>Hello from Trip!</h1>

    <Link to='/shift/main'>
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