import React from 'react';
import { Link } from 'react-router-dom';
import { addTimeStamp } from '../../helpers/ShiftHelpers';
import NewTrip from './trip/00-NewTrip';

export default function MainShift({ shift, setShift, updateTrip, trip }) {
  // console.log(shift);

  const pauseShift = () => {
    addTimeStamp(setShift, shift);
  };

  return (
    <div>
      <Link to = "/shift-paused">
        <button
          onClick = {pauseShift}
        >
          Pause Shift
        </button>
      </Link>

      <Link onClick = {() => console.log('Shift Paused')} to = "/end-shift">
        <button>
          End Shift
        </button>
      </Link>

      <NewTrip
        updateTrip = {updateTrip}
        trip = {trip}
      />
    </div>
  );
}