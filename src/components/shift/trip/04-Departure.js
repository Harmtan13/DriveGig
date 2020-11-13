import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Departure({ updateTrip, tripsSort }) {
  const maxTrips = !(tripsSort.active.length >= 2);

  const timeStamp = createStamp('time', Date.now(), 1, 2);
  const stampInputs = [timeStamp];

  const updateTripDeparture = () => {
    const tripData = {
      stampInputs,
    };

    updateTrip(tripData);
  };

  const addTrip = () => {
    const sequenceTrigger = 'addOn';

    const tripData = {
      stampInputs,
    };

    updateTrip(tripData);
  };

  const headOutLink = () => (maxTrips ? '/shift/delivery' : '/shift/trips');

  return (
    <div>
      <Link to = {headOutLink}>
        <button onClick = {updateTripDeparture}>Head Out</button>
      </Link>

      {maxTrips && (
        <Link to = "/shift/start-trip">
          <button onClick = {addTrip}>Add-on Trip</button>
        </Link>
      )}
    </div>
  );
}