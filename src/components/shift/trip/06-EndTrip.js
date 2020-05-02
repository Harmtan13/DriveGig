import React from 'react'
import { Link } from 'react-router-dom';

export default function EndTrip({history}) {
  return (
    <div>

    <label htmlFor="odometer">
      <p>Final Amount</p>

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
      <p>Odometer-</p>

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
       <Link to='/shift'>
        <button>
          Delivered
        </button>
       </Link>
     </center>

    </div>
  )
}
