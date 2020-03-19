import React from 'react'

export default function Trips({history}) {
  const startTrip = () => {
    history.push('./shift/trips')
  }

  return (
    <div>
      <h1>Hello from Trip!</h1>

      <select>
        <option value="doordash">DoorDash</option>
        <option value="grubhub">GrubHub</option>
        <option value="postmates">PostMates</option>
        <option value="ubereats">Uber Eats</option>
      </select>

      <button>
        Start Trip
      </button>

      <button>
        Pause Shift
      </button>
    </div>
  )
}
