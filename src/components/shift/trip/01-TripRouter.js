import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

import createTrip from './../../../helpers/CreateTrip';
import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import { stampManager, currentTrip, getLocalStorage, setLocalStorage } from '../../../helpers/trips/TripHelpers';
import { useTrips, useStamps } from '../../../helpers/trips/customHooks';

export default function TripRouter() {
  const [trips, setTrips] = useTrips();
  const [trip, setTrip] = useState(currentTrip || createTrip(trips));
  const [odometerStamps, setOdometerStamps] = useStamps(getLocalStorage.odometerStamps || []);
  const [timeStamps, setTimeStamps] = useStamps(getLocalStorage.timeStamps || []);
  const activeTrips = trips.filter(trip => trip.completed === false).length;
  const [index, setIndex] = useState(activeTrips || 0);

  const tripState = {
    trip,
    odometerStamps,
    timeStamps,
    setTrip,
    setOdometerStamps,
    setTimeStamps,
    index,
    setIndex, 
    activeTrips
  }
  
  useEffect(() => {
    stampManager({...tripState});
    console.log({trip, trips, odometerStamps, timeStamps})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [odometerStamps, timeStamps])

  useEffect(() => {
    setTrips(trip);
    setLocalStorage({trip, trips, odometerStamps, timeStamps})

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
