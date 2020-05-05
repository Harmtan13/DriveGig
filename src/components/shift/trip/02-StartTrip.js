import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function StartTrip({trips, setTrips, trip, setTrip}) {
  const [provider, setProvider] = useState(trip.orderProvider);
  const [odometerStart, setOdometerStart] = useState(trip.odometer[0] || '');
  console.log(trips);

  const updateTrip = () => {
    const odometer = [Number(odometerStart)];
    const driveTime = [Date.now()];
    const orderProvider = provider;
    const updatedTrip = {...trip, odometer, driveTime, orderProvider};

    setTrip(updatedTrip);

    return updatedTrip;
  }

  const updateTrips = (trip) => {
    const determineTripPlacement = () => {
      const lastTrip = trips.slice(-1).pop() || '';

      return trip.id === lastTrip.id ? true : false
    }

    const updateTripsArray = () => {
      const updatedTrips = [...trips, trip];

      setTrips(updatedTrips);
      localStorage.setItem('trips', JSON.stringify(updatedTrips));
    }

    const replaceTripsArray = () => {
      const updatedTrips = [...trips.slice(0,-1), trip];

      setTrips(updatedTrips);
      localStorage.setItem('trips', JSON.stringify(updatedTrips));
    }

    return determineTripPlacement() === true ? replaceTripsArray() : updateTripsArray()
  }

  const startTrip = () => {
    updateTrip();
    updateTrips(updateTrip());
  }

  return (
    <div>
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      >
        <option value="">Select Delivery Provider</option>
        <option value="doordash">DoorDash</option>
        <option value="grubhub">GrubHub</option>
        <option value="postmates">PostMates</option>
        <option value="ubereats">Uber Eats</option>
      </select>

      <br/>
      <br/>
        
      <label htmlFor="odometer">
        <p>Current Odometer</p>

        <input 
            type="number" 
            name="-odometer" 
            placeholder="000000"
            onChange={(e) => setOdometerStart(e.target.value)}
            value={odometerStart}
          />
      </label>

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
