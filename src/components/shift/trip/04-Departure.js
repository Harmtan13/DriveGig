import React from 'react'
import {Link} from 'react-router-dom';
import createTrip from './../../../helpers/CreateTrip';
import {activeTrips, getLocalStorage} from './../../../helpers/trips/TripHelpers'

export default function Departure({setTrip, setTime, setOdometer, odometer}) {
  const maxTrips = !(activeTrips.length >= 2);
  console.log(activeTrips.length, maxTrips);

  const updateTripDeparture = () => {
    // const departureTime = Date.now();
    // const timeStamps = [...trip.timeStamps, departureTime];
  }

  const addTrip = () => {
    setTrip(createTrip(getLocalStorage.trips));
  }

  const headOutLink = () => {
    return maxTrips ? '/shift/delivery' : '/shift/trips'
  }

  console.log(headOutLink());

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

