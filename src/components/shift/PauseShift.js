import React from 'react'
import {Link} from 'react-router-dom';
import { determinePlacement, addTimeStamp } from '../../helpers/AppHelpers'

export default function PauseShift({shift, setShift}) {
  console.log({shift});
  const resumeShift = () => {
    addTimeStamp(determinePlacement, setShift, shift, 1)
  }
  
  return (
    <div>
      <Link to='main'>
        <button
          onClick={resumeShift}
        >
          Resume Shift
        </button>
      </Link>
    </div>
  )
}