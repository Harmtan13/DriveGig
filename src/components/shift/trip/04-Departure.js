import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Departure({ updateTrip, tripsCounter, setIsAddOn }) {
  const maxTrips = !(tripsCounter.active.length >= 2);

  // Updates Current Trip
  const updateTripDeparture = () => {
    const timeStamp = createStamp('time', Date.now(), 1, 2);
    const stampInputs = [timeStamp];

    const tripData = {
      stampInputs,
    };

    // Calls SetState in the background after parsing tripData
    updateTrip(tripData);
  };

  // Updates Current Trip then Resets to a blank slate
  const addTrip = () => {
    updateTripDeparture();
    setIsAddOn(true);
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