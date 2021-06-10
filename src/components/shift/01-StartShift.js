import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../helpers/trips/TripHelpers';

export default function StartShift({ shift, setStage, updateShift }) {
  const [odometerStart, setOdometerStart] = useState(shift.miles?.startShift?.start || '');

  const nextPage = '/shift'

  const startShift = () => {
    const timeStamp = createStamp({
      title: 'time',
      stampValue: Date.now(),
      stage: 'startShift',
      placement: 'start'
    })

    const odomStamp = createStamp({
      title: 'miles',
      stampValue: odometerStart,
      stage: 'startShift',
      placement: 'start'
    });

    const stampInputs = [timeStamp, odomStamp];

    const shiftData = {
      stampInputs,
    }

    updateShift(shiftData);

    // const updatedShift = { ...shift, miles: odometer, time: timeStamps };


    setStage(nextPage);
    // setShift(updatedShift);
    // localStorage.setItem('shift', JSON.stringify(updatedShift));
  };

  return (
    <>
      <label htmlFor = "odometer-start">

        <p>Odometer Start</p>

        <input
          type = "number"
          name = "odometer-start"
          onChange = {e => setOdometerStart(e.target.value)}
          value = {odometerStart}
        />
      </label>

      <Link to = {nextPage}>
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