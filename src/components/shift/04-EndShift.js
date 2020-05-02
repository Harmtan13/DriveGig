import React from 'react'
import { Link } from 'react-router-dom';

export default function EndShift({history}) {
  return (
    <div>
      <label htmlFor="odometer-end">
        <p>Current Odometer</p>

        <input 
            type="number" 
            name="odometer-end" 
            placeholder="000000"
            // onChange={(e) => setOffer(e.target.value)}
            // value={offer}
          />
      </label>

      <br/>
      <br/>

      <center>
        <Link to='/statistics'>
          <button>
            Clock Out
          </button>
        </Link>
      </center>
      
    </div>
  )
}
