import React from 'react'

export default function TripEnd({history}) {
  return (
    <div>

    <label htmlFor="odometer">
      <p>Offer Amount</p>

      <input 
          type="number" 
          name="odometer" 
          placeholder="000000"
          // onChange={(e) => setOffer(e.target.value)}
          // value={offer}
        />
    </label>


      <br/><br/>

    <label htmlFor="payout">
      <p>Offer Amount</p>

      <input 
          type="number" 
          name="payout" 
          placeholder="000000"
          // onChange={(e) => setOffer(e.target.value)}
          // value={offer}
        />
    </label>

      <br/><br/>

     <center>
       <button onClick = {() => history.push('/shift/main')}>
         Delivered
       </button>
     </center>

    </div>
  )
}
