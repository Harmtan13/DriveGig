import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../../helpers/trips/TripHelpers';

export default function StartTrip({trip, setTrip, tripsCounter}) {
  const [orderProvider, setOrderProvider] = useState(trip.orderProvider);
  const [odometerStart, setOdometerStart] = useState(trip.miles[0][0] || '');
  const [diner, setDiner] = useState(trip.diner || '');
  const [restaurant, setRestaurant] = useState(trip.restaurant || '');

  const determineTimeStamp = () => {
    if (tripsCounter.active <=1) {
      return createStamp('time', Date.now(), 0)
    } else {
      return createStamp('time', Date.now(), 0, 1)
    }
  }

  const startTrip = () => {
    const timeStamp = determineTimeStamp();
    const odomStamp = createStamp('miles', odometerStart, 0);
    const stampInputs = [timeStamp, odomStamp];

    const tripData = {
      diner,
      restaurant,
      orderProvider,
      stampInputs
    };

    setTrip(tripData);
  }

  return (
    <div>
      <label htmlFor="diner">
        <input 
          type="text" 
          name="diner" 
          placeholder="Diner's Name"
          onChange={(e) => setDiner(e.target.value)}
          value={diner}
        />
      </label>

      <br/>
      <br/>

      <label htmlFor="restaurant">
        <input 
          type="text" 
          name="restaurant" 
          placeholder="Restaurant Name"
          onChange={(e) => setRestaurant(e.target.value)}
          value={restaurant}
        />
      </label>

      <br/>
      <br/>

      <label htmlFor="odometer">
        <input 
            type="number" 
            name="odometer" 
            placeholder="Current Odometer"
            onChange={(e) => setOdometerStart(e.target.value)}
            value={odometerStart}
          />
      </label>

      <br/>
      <br/>
      
      <select
        value={orderProvider}
        onChange={(e) => setOrderProvider(e.target.value)}
      >
        <option value="">Select Delivery Provider</option>
        <option value="doordash">DoorDash</option>
        <option value="grubhub">GrubHub</option>
        <option value="postmates">PostMates</option>
        <option value="ubereats">Uber Eats</option>
      </select>

      <br/>
      <br/>

      <Link to='/shift/pickup'>
        <button
          onClick={startTrip}
        >
          Head for Pickup
        </button>
      </Link>

    </div>
  )
}