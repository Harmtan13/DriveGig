import React from 'react';
import { Link } from 'react-router-dom';

export default function NewTrip({ updateTrip, trip }) {
  const stampInputs = [];

  const newTrip = () => {
    const sequenceTrigger = !!trip.completed;

    const tripData = {
      sequenceTrigger,
      stampInputs,
    };

    updateTrip(tripData);
    console.log('newTrip');
  };


  return (
    <>
      <Link onClick = {newTrip} to = "/shift/start-trip">
        <button>
          Start Trip
        </button>
      </Link>
    </>
  );
}