import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function StartTrip({trip, updateTrips}) {
  const [provider, setProvider] = useState(trip.orderProvider);
  const [odometerStart, setOdometerStart] = useState(trip.odometer[0] || '');

  const startTrip = () => {
    const odometer = [Number(odometerStart)];
    const timeStamps = [Date.now()];
    const orderProvider = provider;
    const updatedTrip = {...trip, odometer, timeStamps, orderProvider};

    updateTrips(updatedTrip);
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
