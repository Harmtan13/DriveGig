import React from 'react';
import { Link } from 'react-router-dom';
import { addTimeStamp } from '../../helpers/ShiftHelpers';

export default function PauseShift({ shift, setShift, setStage }) {
  setStage('/shift');
  const resumeShift = () => {
    addTimeStamp(setShift, shift, 1);
  };

  return (
    <div>
      <Link to = "/shift">
        <button
          onClick = {resumeShift}
        >
          Resume Shift
        </button>
      </Link>
    </div>
  );
}