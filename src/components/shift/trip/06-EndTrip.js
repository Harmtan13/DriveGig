import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';
import { round, runRate, currencyAddition } from './../../../helpers/AppHelpers';

export default function EndTrip({ 
  trip, 
  updateTrip, 
  tripsSort, 
  switchTrigger, 
  setStage, 
  updateShift, 
  setShiftStageId, 
  shiftStageId 
}) {
  const stampDate = Date.now();
  const [odometer, setOdometer] = useState(trip?.stageInfo?.delivery?.end || '');
  const [providerPay, setProviderPay] = useState(trip.pay.provider || '');
  const [tipPay, setTip] = useState(trip.pay.tip || '');
  const pay = currencyAddition(tipPay, providerPay);
  const time = stampDate - trip.start.time 
  const distance = odometer - trip.start.distance

  const currentTrips = tripsSort.active.length >= 2;
  const stageId = 
    shiftStageId ==  null ? 
      trip.id.toString() : 
      shiftStageId.concat(`-${trip.id}`)
        .split('-')
        .sort()
        .join('-');

  const determineLink = () => (currentTrips ? '/shift/trips' : '/shift');
  const triggerToggle = () => (!!currentTrips);

  const timeStamp = createStamp({
    title: 'time', 
    stampValue: Date.now(), 
    stage: 'delivery', 
    switchTrigger
  });

  const odomStamp = createStamp({
    title: 'distance', 
    stampValue: odometer, 
    stage: 'delivery', 
    switchTrigger
  });

  const stampInputs = [timeStamp, odomStamp];

  const completed = true;

  const end = {
    time: stampDate,
    distance: odometer
  }

  const total = {
    time,
    distance,
    providerPay: providerPay,
    tipPay,
    pay,
    perDistancePay: round(pay / distance),
    payRunRate: runRate(time, pay),
  }

  const tripData = {
    completed,
    stampInputs,
    pay,
    switchTriggerToggle: triggerToggle(),
    end,
    total
  };

  const exportShiftData = () => {
    const placement = 'end';
    const stage = !shiftStageId ? `Trip-${stageId}` : `Trips-${stageId}`;

    const stampInputs = [
      {...timeStamp, placement, stage},
      {...odomStamp, placement, stage}
    ];

    const shiftData = {
      stampInputs,
      stageId
    }

    return shiftData;
  }

  const endTrip = () => {
    setStage(determineLink());
    setShiftStageId(stageId)
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
          value = {tipPay}
          onChange = {e => setTip(e.target.value)}
        />
      </label>

      <br />
      <br />

      <p>{`$${pay}` || '$0.00'} </p>

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