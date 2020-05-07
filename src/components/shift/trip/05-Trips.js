import React from 'react'

export default function Trips({trips}) {
  return (
    <div>
      <h1>Trips</h1>
      {trips.map((trip) => (
        <h3>{trip.id}</h3>
      ))}
    </div>
  )
}
