import React from 'react'
import {Link} from 'react-router-dom';
import { validateDataStamp } from '../../helpers/AppHelpers'

export default function PauseShift({shift, setShift}) {

  const resumeShift = () => {
    const timeStamp = Date.now();
    const timeStamps = validateDataStamp(shift, timeStamp, 1);

    let updatedShift = {...shift, timeStamps};

    setShift(updatedShift);
    localStorage.setItem('shift', JSON.stringify(updatedShift));
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