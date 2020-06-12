import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';

import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import { setLocalStorage } from '../../../helpers/trips/TripHelpers';
import { useTrip, useTrips, } from '../../../helpers/trips/customHooks';

export default function TripRouter() {
  const [trips, setTrips] = useTrips();
  const [trip, setTrip] = useTrip();
  const activeTrips = trips.filter(trip => trip.completed === false).length;

  const tripState = {
    trip,
    setTrip,
    activeTrips
  }

  useEffect(() => {
    setTrips(trip);
    setLocalStorage({trip, trips})
    console.log('trip noticed');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trip]);

  return (
    <>
      <Route exact path='/shift/start-trip'>
        <StartTrip 
          {...tripState}
        />
      </Route>

      <Route path='/shift/pickup'>
        <Pickup {...tripState} />
      </Route>

      <Route path='/shift/departure'>
        <Departure 
          {...tripState}
        />
      </Route>

      <Route path='/shift/trips'>
        <Trips {...tripState} />
      </Route>
    
      <Route path='/shift/delivery'>
        <EndTrip 
          {...tripState} 
        />
      </Route>
    </>
  )
}