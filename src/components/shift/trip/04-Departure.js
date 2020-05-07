import React from 'react'
import {Link} from 'react-router-dom';

export default function Departure({trips, trip, setTrip, updateTrips}) {
  const maxTrips = trips.length <= 1;
  console.log(maxTrips);

  const updateTripDeparture = () => {
    const departureTime = Date.now();
    const driveTime = [...trip.driveTime, departureTime];
    const waitTime = [...trip.waitTime, departureTime];
    const updatedTrip = {...trip, driveTime, waitTime}

    setTrip(updatedTrip);
    updateTrips(updatedTrip);
  }

  const updateTripIndex = () => {
    setTrip({ 
      id: trips.length,
      orderProvider: '',
      odometer: [],
      driveTime: [],
      waitTime: [],
      pay: {
        provider: '',
        tip: '',
        total: ''
    }});
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
          <button onClick={updateTripIndex}>
            Add-on Trip
          </button>
        </Link>}

    </div>
  )
}

