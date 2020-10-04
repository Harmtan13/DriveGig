import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function EndTrip({ trip, updateTrip }) {
  const [odometer, setOdometer] = useState('');
  const [payout, setPayout] = useState('');

  const currentTrips = [];
  // activeTripsHelper(trips);

  const determineLink = () => {
    if (currentTrips.length > 1) {
      return '/shift/trips';
    }
    return '/shift';
  };

  const endTrip = () => {
    const timeStamp = createStamp('time', Date.now(), 1);
    const odomStamp = createStamp('miles', odometer, 2);
    const completed = true;
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      completed,
      stampInputs,
    };

    updateTrip(tripData);
  };

  return (
    <div>

      <label htmlFor = "odometer">
        <p>Odometer</p>

        <input
          type = "number"
          name = "odometer"
          placeholder = "000000"
          value = {odometer}
          onChange = {e => setOdometer(e.target.value)}
        />
      </label>


      <br />
      <br />

      <label htmlFor = "payout">
        <p>Pay</p>

        <input
          type = "number"
          name = "payout"
          placeholder = "000000"
          value = {payout}
          onChange = {e => setPayout(e.target.value)}
        />
      </label>

      <br />
      <br />

      <center>
        <Link to = {determineLink()}>
          <button onClick = {endTrip}>
            Delivered
          </button>
        </Link>
      </center>

    </div>
  );
}
