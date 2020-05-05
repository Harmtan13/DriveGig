import React from 'react'
import {Link} from 'react-router-dom';

export default function Departure({trips, trip, setTrip}) {
  const updateTripDeparture = () => {
    const departureTime = Date.now();
    const driveTime = [...trip.driveTime, departureTime];
    const waitTime = [...trip.waitTime, departureTime];
    const updatedTrip = {...trip, driveTime, waitTime}

    setTrip(updatedTrip);
    localStorage.setItem('trips', JSON.stringify([...trips, updatedTrip]));
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

  return (
    <div>
      <Link to='/shift/delivery'>
        <button onClick={updateTripDeparture} >
          Head Out
        </button>
      </Link>

      <Link to='/shift/start-trip'>
        <button onClick={updateTripIndex}>
          Add-on Trip
        </button>
      </Link>
    </div>
  )
}

