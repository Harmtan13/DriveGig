import React from 'react'

export default function Departure({history}) {
  return (
    <div>
      <button 
        onClick={() => history.push('/shift/trip/delivery')}>
        Head Out
      </button>

      <button 
        onClick={() => history.push('/shift/trip')}>
        Add-on Trip
      </button>
    </div>
  )
}

