import React from 'react'

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
      <button onClick={() => history.push('/statistics')}>Clock Out</button>
      </center>
      
    </div>
  )
}
