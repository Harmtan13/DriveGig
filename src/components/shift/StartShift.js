import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function ShiftStart(shiftState) {
  const {shift, setShift} = shiftState;

  const [odometerStart, setOdometerStart] = useState(shift.odometer[0] || '');

  const updateShift = () => {
    const odometer = [Number(odometerStart)];
    const timeStamp = [Date.now()];
    const updatedShift = {...shift, odometer, timeStamp};

    setShift(updatedShift);
    localStorage.setItem('shift', JSON.stringify(updatedShift));
    console.log(updatedShift);
  }

  return (
    <>
      <label htmlFor="odometer-start">

        <p>{odometerStart}</p>

        <p>Odometer Start</p>

        <input 
          type="number" 
          name="odometer-start"
          onChange={(e) => setOdometerStart(e.target.value)}
          value={odometerStart}
        />
      </label>

      <Link to='/shift/main'>
        <button
          type='submit'
          onClick={() => updateShift()}
          disabled = {!odometerStart}
        >
          Clock In
        </button>
      </Link>
    </>
  )
}