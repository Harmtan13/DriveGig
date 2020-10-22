import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function EndTrip({ trip, updateTrip }) {
  const [odometer, setOdometer] = useState(trip.miles[1][1] || '');
  const [providerPay, setProviderPay] = useState(trip.pay.provider || '');
  const [tip, setTip] = useState(trip.pay.tip || '');

  const currentTrips = [];
  // activeTripsHelper(trips);

  const determineLink = () => {
    if (currentTrips.length > 1) {
      return '/shift/trips';
    }
    return '/shift';
  };

  const endTrip = () => {
    const timeStamp = createStamp('time', Date.now(), 2);
    const odomStamp = createStamp('miles', odometer, 1);
    const completed = true;
    const pay = {
      provider: providerPay,
      tip,
    };
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      completed,
      stampInputs,
      pay,
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

      <h3>Pay</h3>

      <label htmlFor = "provider">
        <p>Provider</p>

        <input
          type = "number"
          name = "provider"
          placeholder = "000000"
          value = {providerPay}
          onChange = {e => setProviderPay(e.target.value)}
        />
      </label>

      <br />
      <br />

      <label htmlFor = "tip">
        <p>Tip</p>

        <input
          type = "number"
          name = "tip"
          placeholder = "000000"
          value = {tip}
          onChange = {e => setTip(e.target.value)}
        />
      </label>

      <br />
      <br />

      <center>
        <Link to = "/shift/delivery">
          <button type = "submit" onClick = {endTrip}>
            Delivered
          </button>
        </Link>
      </center>

    </div>
  );
}