import React from 'react';
import { Link } from 'react-router-dom';

export default function EndShift({}) {
  const endShift = () => {

  };

  return (
    <div>
      <label htmlFor = "odometer-end">
        <p>Current Odometer</p>

        <input
          type = "number"
          name = "odometer-end"
          placeholder = "000000"
        />
      </label>

      <br />
      <br />

      <center>
        <Link to = "/statistics">
          <button>
            Clock Out
          </button>
        </Link>
      </center>

    </div>
  );
}