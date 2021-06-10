import React from 'react';
import { Link } from 'react-router-dom';
import { createStamp } from './../../helpers/trips/TripHelpers';

export default function PauseShift({ updateShift, setStage, shiftStageId }) {
  setStage('/active-shift');

  console.log(shiftStageId)

  const resumeShift = () => {
    const timeStamp = createStamp({
      title: 'time',
      stampValue: Date.now(),
      stage: `break-${shiftStageId}`,
      placement: 'end'
    })

    const stampInputs = [timeStamp];

    const shiftData = {
      stampInputs
    }

    updateShift(shiftData)
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