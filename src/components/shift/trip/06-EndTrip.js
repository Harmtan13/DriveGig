import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EndTrip({trips, trip, setTrip, updateTrips}) {
  const [odometer, setOdometer] = useState('');
  const [payout, setPayout] = useState('');

  const currentTrips = [];
  // activeTripsHelper(trips);
  
  const determineLink = () => {
    console.log(currentTrips.length);
    if (currentTrips.length > 1) {
      return '/shift/trips';
    } else {
      return '/shift';
    }
  }

  const endTrip = () => {
    // const endTime = Date.now();
    // const timeStamps = [...trip.timeStamps, endTime];
    // const completed = true;
    // const updatedTrip = {...trip, timeStamps, completed};

    // updateTrips(updatedTrip, false);
  }

  return (
    <div>

    <label htmlFor="odometer">
      <p>Odometer</p>
      
      <input 
        type="number" 
        name="odometer" 
        placeholder="000000"
        value={odometer}
        onChange={(e) => setOdometer(e.target.value)}
      />
    </label>


      <br/><br/>

    <label htmlFor="payout">
      <p>Pay</p>

      <input 
        type="number" 
        name="payout" 
        placeholder="000000"
        value={payout}
        onChange={(e) => setPayout(e.target.value)}
      />
    </label>

      <br/><br/>

     <center>
       <Link to={determineLink()}>
        <button onClick={endTrip}>
          Delivered
        </button>
       </Link>
     </center>

    </div>
  )
}
