import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../helpers/trips/TripHelpers';

export default function EndShift({ shift, updateShift, setStage }) {
  const [odometerEnd, setOdometerEnd] = useState('');

  const endShift = () => {
    const timeStamp = createStamp({
      title: 'time',
      stampValue: Date.now(),
      stage: 'endShift',
      placement: 'end'
    })

    const odomStamp = createStamp({
      title: 'distance',
      stampValue: odometerEnd,
      stage: 'endShift',
      placement: 'end'
    })

    const stampInputs = [timeStamp, odomStamp];
    const completed = true;

    const shiftData = {
      completed,
      stampInputs
    }

    setStage('');
    updateShift(shiftData);
  };

  return (
    <div>
      <label htmlFor = "odometer-end">
        <p>Current Odometer</p>

        <input
          type = "number"
          name = "odometer-end"
          placeholder = "000000"
          onChange = {e => setOdometerEnd(e.target.value)}
        />
      </label>

      <br />
      <br />

      <center>
        <Link to = "/">
          <button
            onClick = {endShift}
          >
            Clock Out
          </button>
        </Link>
      </center>

    </div>
  );
}