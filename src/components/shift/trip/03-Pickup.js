import React from 'react';
import { Link } from 'react-router-dom';

export default function Pickup({trips, trip, setTrip, updateTrips}) {

  const updateTripPickup = () => {
    const pickupTime = Date.now();
    const timeStamps = [...trip.timeStamps, pickupTime];
    const waitTime = [pickupTime]
    const updatedTrip = {...trip, timeStamps, waitTime}

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