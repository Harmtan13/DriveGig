import React from 'react'
import {Link} from 'react-router-dom';
import createTrip from './../../../helpers/CreateTrip';
import { createStamp } from './../../../helpers/trips/TripHelpers';

export default function Departure({trip, setTrip, tripsCounter}) {
  const maxTrips = !(tripsCounter.activeTrips >= 2);

  const updateTripDeparture = () => {
    const timeStamp = createStamp('time', Date.now(), 0, 1);
    const stampInputs = [timeStamp];

    const tripData = {
      stampInputs
    }

    setTrip(tripData);
  }

  const addTrip = () => {
    setTrip(createTrip(tripsCounter.totalTrips));
  }

  const headOutLink = () => {
    return maxTrips ? '/shift/delivery' : '/shift/trips'
  }

  return (
    <div>
      <Link to={headOutLink}>
        <button onClick={updateTripDeparture} >
          Head Out
        </button>
      </Link>

      {maxTrips && 
        <Link to='/shift/start-trip'>
          <button onClick={addTrip}>
            Add-on Trip
          </button>
        </Link>}

    </div>
  )
}

