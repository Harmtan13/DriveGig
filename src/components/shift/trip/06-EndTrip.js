import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EndTrip({trip, setTrip}) {
  const [odometer, setOdometer] = useState('');
  const [payout, setPayout] = useState('');
  console.log(trip);

  const endTrip = () => {

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
       <Link to='/shift'>
        <button>
          Delivered
        </button>
       </Link>
     </center>

    </div>
  )
}
