import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function StartShift({ shift, setShift }) {
  const [odometerStart, setOdometerStart] = useState(shift.miles[0] || '');

  const startShift = () => {
    const odometer = [odometerStart];
    const timeStamps = [Date.now()];
    const updatedShift = { ...shift, miles: odometer, time: timeStamps };

    setShift(updatedShift);
    localStorage.setItem('shift', JSON.stringify(updatedShift));
  };

  return (
    <>
      <label htmlFor = "odometer-start">

        <p>{odometerStart}</p>

        <p>Odometer Start</p>

        <input
          type = "number"
          name = "odometer-start"
          onChange = {e => setOdometerStart(e.target.value)}
          value = {odometerStart}
        />
      </label>

      <Link to = "/shift">
        <button
          type = "submit"
          onClick = {startShift}
          disabled = {!odometerStart}
        >
          Clock In
        </button>
      </Link>
    </>
  );
}