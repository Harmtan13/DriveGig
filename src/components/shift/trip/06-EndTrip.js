import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function EndTrip({ trip, updateTrip, tripsSort, switchTrigger, setStage }) {
  const [odometer, setOdometer] = useState(trip.miles[1][1] || '');
  const [providerPay, setProviderPay] = useState(trip.pay.provider || '');
  const [tip, setTip] = useState(trip.pay.tip || '');
  const currentTrips = tripsSort.active.length >= 2;

  const determineLink = () => (currentTrips ? '/active-shift/trips' : '/active-shift');
  const triggerToggle = () => (!!currentTrips);

  const endTrip = () => {
    const timeStamp = createStamp('time', Date.now(), 2, 1, switchTrigger);
    const odomStamp = createStamp('miles', odometer, 1, 1, switchTrigger);
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
      switchTriggerToggle: triggerToggle(),
    };

    setStage(determineLink());
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
        <Link onClick = {endTrip} to = {determineLink()}>
          <button type = "submit">
            Delivered
          </button>
        </Link>
      </center>

    </div>
  );
}