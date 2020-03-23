import React from 'react'

export default function Departure({history}) {
  return (
    <div>
      <button 
        onClick={() => history.push('/shift/trip/delivery')}>
        Head out
      </button>
    </div>
  )
}

