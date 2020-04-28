import React from 'react'
import { Link } from 'react-router-dom';

export default function NewTrip({history, odometer}) {
  return (
    <>
      <Link to="trip">
        <button>
          Start Trip
        </button>
      </Link>
    </>
  )
}