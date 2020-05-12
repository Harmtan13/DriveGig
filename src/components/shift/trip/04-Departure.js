import React from 'react'
import {Link} from 'react-router-dom';
import createTrip from './../../../helpers/CreateTrip';
import {activeTripsHelper} from './../../../helpers/TripHelpers';

export default function Departure({trips, trip, setTrip, updateTrips}) {
  const activeTrips = activeTripsHelper(trips);
  const maxTrips = !(activeTrips.length >= 2);

  const updateTripDeparture = () => {
    const departureTime = Date.now();
    const timeStamps = [...trip.timeStamps, departureTime];
    const updatedTrip = {...trip, timeStamps}

    updateTrips(updatedTrip);
  }

  const addTrip = () => {
    setTrip(createTrip(trips));
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

