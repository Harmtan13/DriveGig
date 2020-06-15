import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../../helpers/trips/TripHelpers';

export default function Pickup({setTrip}) {

  const updateTripPickup = () => {
    const timeStamp = createStamp('time', 0, Date.now());
    const stampInputs = [timeStamp];

    const tripData = {
      stampInputs
    }

    setTrip(tripData);
  }

  return (
    <div>
      <Link to='/shift/pickup'>
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