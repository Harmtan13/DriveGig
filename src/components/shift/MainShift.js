import React from 'react'
import NewTrip from '../trip/NewTrip';
import { Link } from 'react-router-dom';

export default function MainShift({shift, setShift}) {
  console.log(shift);
  const pauseShift = () => {
    const timeStamp = Date.now();
    let timeStamps;

      if (shift.timeStamps.length % 2 !== 0) {
        timeStamps = [...shift.timeStamps, timeStamp];
      } else {
        timeStamps = [...shift.timeStamps.slice(0,-1), timeStamp]
      }

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