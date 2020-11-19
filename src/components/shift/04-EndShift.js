import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EndShift({ shift, setShift }) {
  const [odometerEnd, setOdometerEnd] = useState('');

  const endShift = () => {
    const odometer = [...shift.miles, odometerEnd];
    const timeStamps = [...shift.time, Date.now()];
    const completed = true;

    const updatedShift = {
      ...shift,
      miles: odometer,
      time: timeStamps,
      completed,
    };

    console.log(updatedShift);
    setShift(updatedShift);
    localStorage.setItem('shift', JSON.stringify(updatedShift));
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