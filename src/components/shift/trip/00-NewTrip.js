import React from 'react';
import { Link } from 'react-router-dom';

export default function NewTrip({ updateTrip, trip, setStage }) {
  const stampInputs = [];

  const newTrip = () => {
    const sequenceTrigger = !!trip.completed;

    const tripData = {
      sequenceTrigger,
      stampInputs,
    };

    setStage('/shift/start-trip');
    updateTrip(tripData);
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