import React from 'react'

export default function NewTrip({history}) {
  return (
    <div>
      <h1>Hello from Trip!</h1>

      <select>
        <option value="doordash">DoorDash</option>
        <option value="grubhub">GrubHub</option>
        <option value="postmates">PostMates</option>
        <option value="ubereats">Uber Eats</option>
      </select>

      <button onClick={() => history.push('/shift/trip')}>
        Start Trip
      </button>

      <button>
        Pause Shift
      </button>
    </div>
  )
}
