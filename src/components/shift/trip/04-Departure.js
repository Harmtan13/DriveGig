import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Departure({ updateTrip, tripsSort, setStage }) {
  const maxTrips = !(tripsSort.active.length >= 2);
  const nextPage = '/shift/start-trip';

  const timeStamp = createStamp({
    title: 'time', 
    stampValue: Date.now(), 
    stage: 'waitTime'});
  const stampInputs = [timeStamp];

  const headOutLink = () => (maxTrips ? '/shift/delivery' : '/shift/trips');

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

    setStage(nextPage);
    updateTrip(tripData);
  };

  return (
    <div>
      <Link onClick = {updateTripDeparture} to = {headOutLink}>
        <button>Head Out</button>
      </Link>

      {maxTrips && (
        <Link onClick = {addTrip} to = {nextPage}>
          <button>Add-on Trip</button>
        </Link>
      )}
    </div>
  );
}