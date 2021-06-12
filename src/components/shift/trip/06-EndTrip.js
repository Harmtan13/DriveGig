import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function EndTrip({ trip, updateTrip, tripsSort, switchTrigger, setStage, updateShift, setShiftStageId, shiftStageId }) {
  const [odometer, setOdometer] = useState(trip.miles.delivery.end || '');
  const [providerPay, setProviderPay] = useState(trip.pay.provider || '');
  const [tip, setTip] = useState(trip.pay.tip || '');
  const total = (Number(providerPay || 0) * 100 + Number(tip || 0) * 100) / 100

  const currentTrips = tripsSort.active.length >= 2;

  const determineLink = () => (currentTrips ? '/shift/trips' : '/shift');
  const triggerToggle = () => (!!currentTrips);

  const endTrip = () => {
    const timeStamp = createStamp({
      title: 'time', 
      stampValue: Date.now(), 
      stage: 'delivery', 
      switchTrigger
  });

    const odomStamp = createStamp({
      title: 'miles', 
      stampValue: odometer, 
      stage: 'delivery', 
      switchTrigger
  });

    const completed = true;
    const pay = {
      provider: providerPay,
      tip,
      total
    };
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      completed,
      stampInputs,
      pay,
      switchTriggerToggle: triggerToggle(),
    };

    const exportShiftData = () => {
      const placement = 'end';
      const stageId = shiftStageId == null ? trip.id.toString() : shiftStageId.concat(`-${trip.id}`);
      setShiftStageId(stageId);
      const stage = !shiftStageId ? `Trip-${stageId}` : `Trips-${stageId}`;

      const stampInputs = [
        {...timeStamp, placement, stage},
        {...odomStamp, placement, stage}
      ];

      const shiftData = {
        stampInputs
      }

      return shiftData;
    }

    setStage(determineLink());
    updateTrip(tripData);

    if (!currentTrips) {
      updateShift(exportShiftData());
    };
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

      <p>{`$${total}` || '$0.00'} </p>

      <br />
      <br />

      <center>
        <Link onClick = {endTrip} to = {determineLink}>
          <button type = "submit">
            Delivered
          </button>
        </Link>
      </center>

    </div>
  );
}