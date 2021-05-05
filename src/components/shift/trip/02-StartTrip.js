import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function StartTrip({ trip, updateTrip, tripsSort }) {
  const newTrip = tripsSort.active.length >= 2;


  const [odometerStart, setOdometerStart] = useState(trip.miles[0][0] || '');


  const startTrip = () => {
    const timeStamp = createStamp('time', Date.now(), 0, 0);
    const odomStamp = createStamp('miles', odometerStart, 0, 0);
    const stampInputs = newTrip ? [] : [timeStamp, odomStamp];

    const tripData = {
      stampInputs,
    };
    updateTrip(tripData);
  };

  return (
    <div>


      {!newTrip && (
        <label htmlFor = "odometer">
          <input
            type = "number"
            name = "odometer"
            placeholder = "Current Odometer"
            onChange = {e => setOdometerStart(e.target.value)}
            value = {odometerStart}
          />
        </label>
      )}

      {!newTrip && (<br />)}
      {!newTrip && (<br />)}

      <Link to = "/shift/pickup">
        <button type = "submit" onClick = {startTrip}>Head for Pickup</button>
      </Link>
    </div>
  );
}