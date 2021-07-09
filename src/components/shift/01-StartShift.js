import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../helpers/trips/TripHelpers';

export default function StartShift({ shift, setStage, updateShift }) {
  const [odometerStart, setOdometerStart] = useState(shift.miles?.startShift?.start || '');

  // const nextPage = '/start-shift'
  const nextPage = '/shift';
  const stampDate = Date.now();

  const startShift = () => {
    const timeStamp = createStamp({
      title: 'time',
      stampValue: stampDate,
      stage: 'startShift',
      placement: 'start'
    })

    const odomStamp = createStamp({
      title: 'distance',
      stampValue: odometerStart,
      stage: 'startShift',
      placement: 'start'
    });

    const stampInputs = [timeStamp, odomStamp];

    const start = {
      time: stampDate,
      distance: odometerStart
    }

    const shiftData = {
      stampInputs,
      start
    }

    updateShift(shiftData);

    setStage(nextPage);
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