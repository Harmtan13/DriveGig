import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Trips({ updateTrip, tripsSort }) {
  const setCurrentTrip = (id) => {
    const trip = tripsSort.active.find(trip => trip.id === id);
    const { orderProvider, restaurant, diner, miles, time, completed, pay } = trip;

    const createNewInputs = (stampSet) => {
      const stampInputs = [];

      const stampReducer = () => {
        const combinedSet = [...stampSet[0], ...stampSet[1]];
        return [...new Set(combinedSet)];
      };

      stampReducer().forEach((stamp, index) => {
        const determineStage = index === 0 ? 0 : index - 1;
        const determineTitle = stamp.length <= 6 ? 'miles' : 'time';
        stampInputs.push(createStamp(determineTitle, stamp, determineStage, index));
      });

      return stampInputs;
    };

    const stampInputs = [...new Set([...createNewInputs(miles), ...createNewInputs(time)])];

    const tripData = {
      id,
      restaurant,
      diner,
      orderProvider,
      miles,
      time,
      stampInputs,
      completed,
      pay,
    };

    updateTrip(tripData);
    // console.log(id, orderProvider, diner, miles, time);
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