import React from 'react';

export default function ShiftStart({ history, odometer, setOdometer}) {

  return (
    <div>
      <label htmlFor="odometer-start">
        <div>{odometer}</div>

        <p>Odometer Start</p>

        <input 
          type="number" 
          name="odometer-start" 
          placeholder="000000"
          onChange={(e) => setOdometer(e.target.value)}
          value={odometer}
        />
      </label>

      <button
        type='submit'
        onClick={() => history.push('/')}
      >
        Clock In
      </button>
    </div>
  )
}