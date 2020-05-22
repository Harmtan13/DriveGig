import React from 'react';
import { Link } from 'react-router-dom';

export default function Pickup({setTimeStamps, index}) {

  const updateTripPickup = () => {
    const pickupTime = Date.now();

    setTimeStamps(pickupTime, index);
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