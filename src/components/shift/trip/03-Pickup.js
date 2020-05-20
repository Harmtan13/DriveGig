import React from 'react';
import { Link } from 'react-router-dom';

export default function Pickup({setTimeStamps}) {

  const updateTripPickup = () => {
    const pickupTime = Date.now();

    setTimeStamps(pickupTime, 1);
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