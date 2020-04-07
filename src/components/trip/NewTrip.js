import React from 'react'

export default function NewTrip({history, odometer}) {
  return (
    <>
      <button 
        onClick={() => history.push('/shift/trip')}
      >
        Start Trip
      </button>
    </>
  )
}