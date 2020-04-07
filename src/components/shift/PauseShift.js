import React from 'react'

export default function PauseShift({history}) {
  return (
    <div>
      <button onClick={() => history.push('/shift/main')}>
        Resume Shift
      </button>
    </div>
  )
}
