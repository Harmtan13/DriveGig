import React from 'react';
import { Link } from 'react-router-dom';
import { addTimeStamp } from '../../helpers/AppHelpers';
import NewTrip from './trip/00-NewTrip';

export default function MainShift({ shift, setShift, trips, updateTrip, trip }) {
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

      <Link to = "/end-shift">
        <button
          onClick = {() => console.log('Shift Paused')}
        >
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