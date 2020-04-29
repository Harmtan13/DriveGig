import React from 'react'
import {Link} from 'react-router-dom';

export default function Departure({trip, setTrip}) {
  console.log(trip);

  return (
    <div>
      <Link to='trip/delivery'>
        <button 
          // onClick={() => history.push('/shift/trip/delivery')}
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

