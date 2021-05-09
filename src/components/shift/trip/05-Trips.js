import React from 'react';
import { Link } from 'react-router-dom';
import { setSavedState } from '../../../helpers/trips/TripHelpers';


export default function Trips({ setTrip, tripsSort, setStage }) {
  const setCurrentTrip = (id) => {
    const trip = tripsSort.active.find(trip => trip.id === id);

    setStage('/active-shift/delivery');
    setSavedState({ trip });
    setTrip(trip);
  };

  return (
    <div>
      <h1>Trips</h1>
      {tripsSort.active.map(trip => (
        <div key = {trip.id}>
          <Link to = "/active-shift/delivery" onClick = {() => (setCurrentTrip(trip.id))}>
            <h3>{trip.id}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}