import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function StartTrip({ trip, updateTrip, isAddOn, tripsSort, stamps }) {
  const newTrip = isAddOn || tripsSort.active.length >= 2;
  const formValue = value => (isAddOn ? '' : value);

  const [orderProvider, setOrderProvider] = useState(formValue(trip.orderProvider));
  const [odometerStart, setOdometerStart] = useState(formValue(trip.miles[0][0]) || '');
  const [diner, setDiner] = useState(formValue(trip.diner) || '');
  const [restaurant, setRestaurant] = useState(formValue(trip.restaurant) || '');

  const determineStamp = () => {
    const rollOverStamp = stamps.miles.stampSet.slice(-1)[0];

    return newTrip ? rollOverStamp : odometerStart;
  };

  const startTrip = () => {
    const timeStamp = createStamp('time', Date.now(), 0, 0);
    const odomStamp = createStamp('miles', determineStamp(), 0, 0);
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      diner,
      restaurant,
      orderProvider,
      stampInputs,
    };
    updateTrip(tripData);
  };

  createStamp('time', Date.now(), 0, 0);

  return (
    <div>
      <label htmlFor = "diner">
        <input
          type = "text"
          name = "diner"
          placeholder = "Diner's Name"
          onChange = {e => setDiner(e.target.value)}
          value = {diner}
        />
      </label>

      <br />
      <br />

      <label htmlFor = "restaurant">
        <input
          type = "text"
          name = "restaurant"
          placeholder = "Restaurant Name"
          onChange = {e => setRestaurant(e.target.value)}
          value = {restaurant}
        />
      </label>

      <br />
      <br />

      {!newTrip && (
        <label htmlFor = "odometer">
          <input
            type = "number"
            name = "odometer"
            placeholder = "Current Odometer"
            onChange = {e => setOdometerStart(e.target.value)}
            value = {odometerStart}
          />
        </label>
      )}

      {!newTrip && (<br />)}
      {!newTrip && (<br />)}

      <select
        value = {orderProvider}
        onChange = {e => setOrderProvider(e.target.value)}
      >
        <option value = "">Select Delivery Provider</option>
        <option value = "doordash">DoorDash</option>
        <option value = "grubhub">GrubHub</option>
        <option value = "postmates">PostMates</option>
        <option value = "ubereats">Uber Eats</option>
      </select>

      <br />
      <br />

      <Link to = "/shift/pickup">
        <button type = "submit" onClick = {startTrip}>Head for Pickup</button>
      </Link>
    </div>
  );
}