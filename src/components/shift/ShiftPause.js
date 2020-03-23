import React from 'react'

export default function ShiftPause({history}) {
  return (
    <div>
      <button onClick={() => history.push('/shift/main')}>
        Resume Shift
      </button>
    </div>
  )
}
