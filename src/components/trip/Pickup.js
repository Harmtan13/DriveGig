import React from 'react'

export default function Pickup({history}) {
  return (
    <div>
      <button onClick={() => history.push('/shift/trip/departure') }>Arrived For Pickup</button>
    </div>
  )
}
