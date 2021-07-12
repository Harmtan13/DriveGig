import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function StartTrip({ 
  trip, 
  updateTrip, 
  tripsSort, 
  setStage, 
  updateShift, 
  shiftStageId, 
  setShiftStageId 
}) {

  const stampDate = Date.now();
const newTrip = tripsSort.active.length >= 2;
  const determineShiftStage = trip.id > 0 ? `nonActive-${shiftStageId}` : 'startShift';
  // const nextPage = '/shift/start-trip'
  const nextPage = '/shift/pickup'

  const [odometer, setOdometer] = useState(trip.startDistance || '');

  console.log(shiftStageId);

  const timeStamp = createStamp({
    title:'time', 
    stampValue: stampDate, 
    stage: 'pickup', 
    placement: 'start'
  });

  const odomStamp = createStamp({
    title:'distance', 
    stampValue: odometer, 
    stage: 'pickup', 
    placement: 'start'
  });

  const startTrip = () => {
    const date = new Date(stampDate).setUTCHours(0,0,0,0);
    const start = {
      time: stampDate,
      distance: odometer
    }

    const stampInputs = newTrip ? [] : [timeStamp, odomStamp];

    const tripData = {
      stampInputs,
      date,
      start
    };

    const exportShiftData = () => {
      const placement = 'end';
      const stage = determineShiftStage;

      const stampInputs = [
        {...timeStamp, placement, stage},
        {...odomStamp, placement, stage}
      ];

      const shiftData = {
        stampInputs
      }

      return trip.id > 0 ? {...shiftData, shiftId: null} : shiftData
    }

    setStage(nextPage);

    if (!newTrip) {
      if (trip.id > 0) setShiftStageId(null);
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
            onChange = {e => setOdometer(e.target.value)}
            value = {odometer}
          />
        </label>
      )}

      {!newTrip && (<br />)}
      {!newTrip && (<br />)}

      <Link to = {nextPage}>
        <button type = "submit" onClick = {startTrip}>Head for Pickup</button>
      </Link>
    </div>
  );
}