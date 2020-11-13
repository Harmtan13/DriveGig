import React from 'react';
import { Link } from 'react-router-dom';
import { setLocalStorage } from '../../../helpers/trips/TripHelpers';


export default function Trips({ setTrip, tripsSort }) {
  const setCurrentTrip = (id) => {
    const trip = tripsSort.active.find(trip => trip.id === id);

    setLocalStorage({ trip });
    setTrip(trip);
  };

  return (
    <div>
      <h1>Trips</h1>
      {tripsSort.active.map(trip => (
        <div key = {trip.id}>
          <Link to = "/shift/delivery" onClick = {() => (setCurrentTrip(trip.id))}>
            <h3>{trip.id}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}