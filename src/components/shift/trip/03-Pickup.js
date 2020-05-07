import React from 'react';
import { Link } from 'react-router-dom';

export default function Pickup({trips, trip, setTrip, updateTrips}) {
  console.log(trips);

  const updateTripPickup = () => {
    const pickupTime = Date.now();
    const driveTime = [...trip.driveTime, pickupTime];
    const waitTime = [pickupTime]
    const updatedTrip = {...trip, driveTime, waitTime}

    setTrip(updatedTrip);
    updateTrips(updatedTrip);
  }

  return (
    <div>
      <Link to='/shift/departure'>
        <button 
          type='submit'
          onClick={updateTripPickup}
        >
          Arrived For Pickup
        </button>
      </Link>
    </div>
  )
}