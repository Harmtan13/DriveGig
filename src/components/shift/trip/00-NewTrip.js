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

    setStage('/active-shift/start-trip');
    updateTrip(tripData);
  };


  return (
    <>
      <Link onClick = {newTrip} to = "/active-shift/start-trip">
        <button>
          Start Trip
        </button>
      </Link>
    </>
  );
}