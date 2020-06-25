import React from 'react';
import { Link } from 'react-router-dom';
import createTrip from '../../../helpers/CreateTrip';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Departure({ trip, setTrip, updateTrip, tripsCounter }) {
  const maxTrips = !(tripsCounter.active >= 2);

  const updateTripDeparture = () => {
    const timeStamp = createStamp('time', Date.now(), 0);
    const stampInputs = [timeStamp];

    const tripData = {
      stampInputs,
    };

    updateTrip(tripData);
  };

  const addTrip = () => {
    setTrip(createTrip(tripsCounter.totalTrips));
  };

  const headOutLink = () => (maxTrips ? '/shift/delivery' : '/shift/trips');

  return (
    <div>
      <Link to={headOutLink}>
        <button onClick={updateTripDeparture}>Head Out</button>
      </Link>

      {maxTrips && (
        <Link to="/shift/start-trip">
          <button onClick={addTrip}>Add-on Trip</button>
        </Link>
      )}
    </div>
  );
}
