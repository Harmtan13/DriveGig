import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Departure({ updateTrip, tripsSort, setStage }) {
  const maxTrips = !(tripsSort.active.length >= 2);

  const timeStamp = createStamp({
    title: 'time', 
    stampValue: Date.now(), 
    stage: 'waitTime'});
  const stampInputs = [timeStamp];

  const headOutLink = () => (maxTrips ? '/active-shift/delivery' : '/active-shift/trips');

  const updateTripDeparture = () => {
    const tripData = {
      stampInputs,
    };

    setStage(headOutLink());
    updateTrip(tripData);
  };

  const addTrip = () => {
    const sequenceTrigger = true;

    const tripData = {
      sequenceTrigger,
      stampInputs,
    };

    setStage('/active-shift/start-trip');
    updateTrip(tripData);
  };

  return (
    <div>
      <Link onClick = {updateTripDeparture} to = {headOutLink}>
        <button>Head Out</button>
      </Link>

      {maxTrips && (
        <Link onClick = {addTrip} to = "/active-shift/start-trip">
          <button>Add-on Trip</button>
        </Link>
      )}
    </div>
  );
}