import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function StartTrip({ trip, updateTrip, tripsSort, setStage, updateShift }) {
  const newTrip = tripsSort.active.length >= 2;
  const shiftStage = trip.id > 0 ? `nonActive${trip.id}` : 'startShift';

  const [odometerStart, setOdometerStart] = useState(trip.miles.pickup.start || '');

  const startTrip = () => {
    
    const timeStamp = createStamp({
      title:'time', 
      stampValue: Date.now(), 
      stage: 'pickup', 
      placement: 'start'
    });

    const odomStamp = createStamp({
      title:'miles', 
      stampValue: odometerStart, 
      stage: 'pickup', 
      placement: 'start'
    });

    const stampInputs = newTrip ? [] : [timeStamp, odomStamp];

    const tripData = {
      stampInputs,
    };

    const exportShiftData = () => {
      const placement = 'end';
      const stage = shiftStage;

      const stampInputs = [
        {...timeStamp, placement, stage},
        {...odomStamp, placement, stage}
      ];

      const shiftData = {
        stampInputs
      }

      return shiftData;
    }

    console.log('TripData: ', tripData);
    console.log('ShiftData: ', exportShiftData());

    setStage('/active-shift/pickup');

    if (!newTrip) {
      updateShift(exportShiftData());
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

      <Link to = "/active-shift/pickup">
        <button type = "submit" onClick = {startTrip}>Head for Pickup</button>
      </Link>
    </div>
  );
}