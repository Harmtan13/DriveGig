import React, {useState} from 'react'
import { Route } from 'react-router-dom';

import createTrip from './../../../helpers/CreateTrip';
import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import {updateTripsHelper} from './../../../helpers/TripHelpers';

export default function TripRouter({shift, setShift}) {
  const [trips, setTrips] = useState(JSON.parse(localStorage.getItem('trips')) || []);
  const currentTrip = trips[trips.length - 1];

  const [trip, setTrip] = useState( currentTrip || createTrip(trips));

  const updateTrips = (trip) => {
    updateTripsHelper(setTrips, trip, trips);
  }

  const tripState = {
    trips,
    setTrips,
    trip, 
    setTrip,
    updateTrips
  }

  return (
    <>
      <Route exact path='/shift/start-trip'>
        <StartTrip {...tripState}/>
      </Route>

      <Route path='/shift/pickup'>
        <Pickup {...tripState} />
      </Route>

      <Route path='/shift/departure'>
        <Departure {...tripState} />
      </Route>

      <Route path='/shift/trips'>
        <Trips {...tripState} />
      </Route>
    
      <Route path='/shift/delivery'>
        <EndTrip {...tripState} />
      </Route>
    </>
  )
}
