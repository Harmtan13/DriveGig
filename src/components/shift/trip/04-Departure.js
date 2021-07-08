import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Departure({trip, updateTrip, tripsSort, setStage }) {
  const maxTrips = !(tripsSort.active.length >= 2);
  const nextPage = '/shift/pickup';
  const stampDate = Date.now();

  const timeStamp = createStamp({
    title: 'time', 
    stampValue: stampDate, 
    stage: 'waitTime'});
  const stampInputs = [timeStamp];

  const endTime = stampDate;

  const headOutLink = () => (maxTrips ? '/shift/delivery' : '/shift/trips');

  const total = {
    time: stampDate - trip.start.time,
  }

  const tripData = {
    stampInputs,
    total
  }

  const updateTripDeparture = () => {
    setStage(headOutLink());
    updateTrip(tripData);
  };

  const addTrip = () => {
    const sequenceTrigger = true;

    const AddonData = {
      ...tripData,
      sequenceTrigger,
    };

    setStage(nextPage);
    updateTrip(AddonData);
  };

  return (
    <div>
      <Link onClick = {updateTripDeparture} to = {headOutLink}>
        <button>Head Out</button>
      </Link>

      {maxTrips && (
        <Link onClick = {addTrip} to = {nextPage}>
          <button>Add-on Trip</button>
        </Link>
      )}
    </div>
  );
}