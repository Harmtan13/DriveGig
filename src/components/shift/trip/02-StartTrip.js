import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function StartTrip(
  {trip, odometerStamps, setTrip, setOdometerStamps, setTimeStamps, index, setIndex}) {
  
  const tripOdometer = odometerStamps[index] || '';
  const [orderProvider, setOrderProvider] = useState(trip.orderProvider);
  const [odometerStart, setOdometerStart] = useState(tripOdometer);
  const [diner, setDiner] = useState(trip.diner || '');
  const [restaurant, setRestaurant] = useState(trip.restaurant || '');

  const startTrip = () => {
    const odometer = Number(odometerStart);
    const timeStamp = Date.now();
    const updatedTrip = {...trip, orderProvider, diner, restaurant};

    setIndex(1);
    setOdometerStamps(odometer, index);
    setTimeStamps(timeStamp, index);
    setTrip(updatedTrip);
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
