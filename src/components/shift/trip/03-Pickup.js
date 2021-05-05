import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Pickup({ trip, updateTrip, currentUser }) {
  const [odometerStart, setOdometerStart] = useState(trip.miles[0][1] || '');
  const [diner, setDiner] = useState(trip.diner || '');
  const [orderProvider, setOrderProvider] = useState(trip.orderProvider);
  const [restaurant, setRestaurant] = useState(trip.restaurant || '');
  const clientList = currentUser ? currentUser.clientList : {};

  const updateTripPickup = () => {
    const timeStamp = createStamp('time', Date.now(), 0);
    const odomStamp = createStamp('miles', odometerStart, 0);
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      diner,
      restaurant,
      orderProvider,
      stampInputs,
    };

    updateTrip(tripData);
  };

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
      <label htmlFor = "odometer">
        <input
          type = "number"
          name = "odometer"
          placeholder = "Current Odometer"
          onChange = {e => setOdometerStart(e.target.value)}
          value = {odometerStart}
        />
      </label>

      <br />
      <br />

      <select
        value = {orderProvider}
        onChange = {e => setOrderProvider(e.target.value)}
      >
        <option value = "">Select Delivery Provider</option>
        {clientList.map(client => (
          <option
            key = {client.split(' ').join('')}
            value = {client.split(' ').join('')}
          >
            {client}
          </option>
        ))}
      </select>

      <br />
      <br />
      <Link to = "/shift/departure">
        <button type = "submit" onClick = {updateTripPickup}>
          Arrived For Pickup
        </button>
      </Link>
    </div>
  );
}