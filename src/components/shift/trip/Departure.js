import React from 'react'
import {Link} from 'react-router-dom';

export default function Departure({trip, setTrip}) {
  const updateTripDeparture = () => {
    const departureTime = Date.now();
    const driveTime = [...trip.driveTime, departureTime];
    const waitTime = [...trip.waitTime, departureTime];
    const updatedTrip = {...trip, driveTime, waitTime}

    setTrip(updatedTrip);
    localStorage.setItem('trip', JSON.stringify(updatedTrip))
  }
  console.log(trip);

  return (
    <div>
      <Link to='delivery'>
        <button 
          onClick={updateTripDeparture}
        >
          Head Out
        </button>
      </Link>

      <Link to='trip'>
        <button 
          // onClick={() => history.push('/shift/trip')}
        >
          Add-on Trip
        </button>
      </Link>
    </div>
  )
}

