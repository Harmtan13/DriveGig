import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

export default function ShiftStart(props) {
  const {shift, setShift} = props;
  const history = useHistory();

  const [odometerStart, setOdometerStart] = useState(shift.odometer[0]);

  const addOdometerStart = () => {
    const odometer = [...shift.odometer, [odometerStart]];
    const updatedShift = {...shift, odometer};

    setShift(updatedShift);
    localStorage.setItem('shift', JSON.stringify(updatedShift));

    history.push('/shift/main')
  }

  return (
    <div>
      <label htmlFor="odometer-start">

        <p>{odometerStart}</p>

        <p>Odometer Start</p>

        <input 
          type="number" 
          name="odometer-start"
          onChange={(e) => setOdometerStart(e.target.value)}
          value={odometerStart}
        />
      </label>

      <button
        type='submit'
        onClick={() => addOdometerStart()}
        disabled = {!odometerStart}
      >
        Clock In
      </button>
    </div>
  )
}