import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../../helpers/trips/TripHelpers';

export default function Pickup({setTrip}) {

  const updateTripPickup = () => {
    const timeStamp = createStamp('time', Date.now(), 0, 1);
    const stampInputs = [timeStamp];

    const tripData = {
      stampInputs
    }

    setTrip(tripData);
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