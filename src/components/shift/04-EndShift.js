import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EndShift({ shift, setShift }) {
  const [odometerEnd, setOdometerEnd] = useState('');

  const endShift = () => {
    const odometer = [...shift.odometer, odometerEnd];
    const timeStamps = [...shift.timeStamps, Date.now()];

    const updatedShift = { ...shift, odometer, timeStamps };

    console.log(updatedShift);
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
        <Link to = "/end-shift">
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