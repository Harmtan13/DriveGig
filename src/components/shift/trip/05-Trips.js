import React from 'react';
import { Link } from 'react-router-dom';
import { setSavedState } from '../../../helpers/trips/TripHelpers';


export default function Trips({ setTrip, tripsSort, setStage }) {
  const nextPage = '/shift/delivery'
  const setCurrentTrip = (id) => {
    const trip = tripsSort.active.find(trip => trip.id === id);

    setStage(nextPage);
    setSavedState({ trip });
    setTrip(trip);
  };

  return (
    <div>
      <h1>Trips</h1>
      {tripsSort.active.map(trip => (
        <div key = {trip.id}>
          <Link to = {nextPage} onClick = {() => (setCurrentTrip(trip.id))}>
            <h3>{trip.diner}</h3>
            <p>{trip.orderProvider}</p>
            <p>{trip.restaurant}</p>
            <br/>
            <br/>
          </Link>
        </div>
      ))}
    </div>
  );
}