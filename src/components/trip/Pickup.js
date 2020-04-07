import React from 'react'

export default function Pickup({history}) {
  return (
    <div>
      <button 
        type='submit'
        onClick={() => history.push('/shift/trip/departure')}
      >
        Arrived For Pickup
      </button>
    </div>
  )
}
