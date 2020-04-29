import React from 'react';
import { Link } from 'react-router-dom';

export default function Pickup({trip, setTrip}) {
  console.log(trip);
  const tripPickup = () => {
    const pickupTime = Date.now();
    const driveTime = [...trip.driveTime, pickupTime];
    const waitTime = [pickupTime]
    const updatedTrip = {...trip, driveTime, waitTime}

    setTrip(updatedTrip);
    localStorage.setItem('trip', JSON.stringify(updatedTrip))
  }

  return (
    <div>
      <Link to='departure'>
        <button 
          type='submit'
          onClick={tripPickup}
        >
          Arrived For Pickup
        </button>
      </Link>
    </div>
  )
}