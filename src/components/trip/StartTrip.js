import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function StartTrip({history}) {
  const [provider, setProvider] = useState('');
  const [odometer, setOdometer] = useState('');

  return (

    <div>
        <select>
          <option value="doordash">DoorDash</option>
          <option value="grubhub">GrubHub</option>
          <option value="postmates">PostMates</option>
          <option value="ubereats">Uber Eats</option>
        </select>

      <br/>
      <br/>
        
      <label htmlFor="odometer">
        <p>Current Odometer</p>
        <p>{odometer}</p>

        <input 
            type="number" 
            name="-odometer" 
            placeholder="000000"
            onChange={(e) => setOdometer(e.target.value)}
            value={odometer}
          />
      </label>

      <br/>
      <br/>

      <Link to='trip/pickup'>
        <button>
          Head for Pickup
        </button>
      </Link>

    </div>
  )
}
