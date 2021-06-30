import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from '../../../helpers/trips/TripHelpers';

export default function Pickup({ trip, updateTrip, currentUser, setStage }) {

  const stampDate = Date.now();
  const [odometer, setOdometer] = useState(trip.miles.pickup.end || '');
  const [diner, setDiner] = useState(trip.diner || '');
  const [orderProvider, setOrderProvider] = useState(trip.orderProvider);
  const [restaurant, setRestaurant] = useState(trip.restaurant || '');
  const clientList = currentUser ? currentUser.clientList : {};
  const nextPage = '/shift/departure';

  const timeStamp = createStamp({
    title: 'time', 
    stampValue: stampDate, 
    stage: 'pickup'
  });

  const odomStamp = createStamp({
    title: 'miles', 
    stampValue: odometer, 
    stage: 'pickup'
  });

  const end = {
    time: stampDate,
    distance: odometer
  }

  const stampInputs = [timeStamp, odomStamp];

  const tripData = {
    diner,
    restaurant,
    orderProvider,
    stampInputs,
    end
  };

  const updateTripPickup = () => {
    setStage(nextPage);
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
          onChange = {e => setOdometer(e.target.value)}
          value = {odometer}
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
      <Link to = {nextPage}>
        <button type = "submit" onClick = {updateTripPickup}>
          Arrived For Pickup
        </button>
      </Link>
    </div>
  );
}