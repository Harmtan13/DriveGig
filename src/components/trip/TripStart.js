import React from 'react'

export default function TripStart({history, offer, setOffer, odometer, setOdometer}) {
  return (
    <div>
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
            onChange={(e) => setOdometer(e.target.value)}
            value={odometer}
          />
      </label>

      <button onClick={() => history.push('/')}>Head for Pickup</button>

    </div>
  )
}
