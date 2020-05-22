import React from 'react';
import { Link } from 'react-router-dom';

export default function Trips({trips, setTrip, activeTrips}) {
  const setCurrentTrip = (id) => {
    setTrip(trips[id]);
  }

  return (
    <div>
      <h1>Trips</h1>
      {activeTrips.map((trip) => (
        <div key={trip.id}>
          <Link to='/shift/delivery' onClick={() =>(setCurrentTrip(trip.id))}>
              <h3>{trip.id}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}