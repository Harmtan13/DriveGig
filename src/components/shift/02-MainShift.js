import React from 'react';
import { Link } from 'react-router-dom';
import { addTimeStamp } from '../../helpers/ShiftHelpers';
import NewTrip from './trip/00-NewTrip';

export default function MainShift({ updateTrip, trip, setStage }) {
  return (
    <div>
      <Link to = "/pause-shift">
        <button>
          Pause Shift
        </button>
      </Link>

      <Link to = "/end-shift">
        <button>
          End Shift
        </button>
      </Link>

      <NewTrip
        updateTrip = {updateTrip}
        trip = {trip}
        setStage = {setStage}
      />
    </div>
  );
}