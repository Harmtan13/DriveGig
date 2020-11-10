import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Pickup({ trip, updateTrip }) {
  const [odometerStart, setOdometerStart] = useState(trip.miles[0][1] || '');

  const updateTripPickup = () => {
    const timeStamp = createStamp('time', Date.now(), 0);
    const odomStamp = createStamp('miles', odometerStart, 0);
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      stampInputs,
    };

    updateTrip(tripData);
  };

  return (
    <div>
      <label htmlFor = "odometer">
        <input
          type = "number"
          name = "odometer"
          placeholder = "Current Odometer"
          onChange = {e => setOdometerStart(e.target.value)}
          value = {odometerStart}
        />
      </label>

      <div>
        {trip.orderProvider}
      </div>

      <br />
      <br />
      <Link to = "/shift/departure">
        <button type = "submit" onClick = {updateTripPickup}>
          Arrived For Pickup
        </button>
      </Link>
    </div>
  );
}