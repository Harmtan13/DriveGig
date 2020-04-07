import React, {useState} from 'react'

export default function StartTrip({history}) {
  const [offer, setOffer] = useState('');
  const [tripOdometer, setripOdometer] = useState('');

  return (

    <div>
        <select>
          <option value="doordash">DoorDash</option>
          <option value="grubhub">GrubHub</option>
          <option value="postmates">PostMates</option>
          <option value="ubereats">Uber Eats</option>
        </select>

      <label htmlFor="offer">
        <p>Offer Amount</p>

        <input 
            type="number" 
            name="offered-pay" 
            placeholder="000000"
            onChange={(e) => setOffer(e.target.value)}
            value={offer}
          />
      </label>  

      <br/>
      <br/>
        
      <label htmlFor="odometer">
        <p>Current Odometer</p>

        <input 
            type="number" 
            name="-odometer" 
            placeholder="000000"
            onChange={(e) => setripOdometer(e.target.value)}
            value={tripOdometer}
          />
      </label>

      <button onClick={() => history.push('/shift/trip/pickup')}>Head for Pickup</button>

    </div>
  )
}
