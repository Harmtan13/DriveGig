import React from 'react';
import { Link } from 'react-router-dom';
import {activeTripsHelper} from './../../../helpers/TripHelpers';

export default function Trips({trips, setTrip}) {
  const setCurrentTrip = (id) => {
    setTrip(trips[id]);
  }

  const activeTrips = activeTripsHelper(trips);

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