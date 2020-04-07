import React from 'react'
import NewTrip from '../trip/NewTrip';

export default function MainShift({shift}) {
  return (
    <div>
      <p>{shift.odometer}</p>
      <h1>Hello from Trip!</h1>

      <button 
        // onClick={() => history.push('/shift/paused')}
      >
        Pause Shift
      </button>

      <button 
        // onClick={() => history.push('/shift/end')}
      >
        End Shift
      </button>

      <NewTrip
        // history={history}
      />
    </div>
  )
}