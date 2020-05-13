import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import createTrip from './../../../helpers/CreateTrip';
import {activeTripsHelper} from './../../../helpers/TripHelpers';

export default function EndTrip({trips, trip, setTrip, updateTrips}) {
  const [odometer, setOdometer] = useState('');
  const [payout, setPayout] = useState('');

  const currentTrips = activeTripsHelper(trips);
  let link = '/shift/trips';
  
  // const determineLink = () => {
  //   if (currentTrips) {
  //     link = '/shift/trips';
  //   }
  // }

  console.log(currentTrips);

  const endTrip = () => {
    const endTime = Date.now();
    const timeStamps = [...trip.timeStamps, endTime];
    const completed = true;
    const updatedTrip = {...trip, timeStamps, completed};

    updateTrips(updatedTrip, false);
    // determineLink();
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
       <Link to={link}>
        <button onClick={endTrip}>
          Delivered
        </button>
       </Link>
     </center>

    </div>
  )
}
