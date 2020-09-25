import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import {
  setLocalStorage,
  tripCounter,
} from '../../../helpers/trips/TripHelpers';
import { useTrip, useTrips } from '../../../helpers/trips/customHooks';

export default function TripRouter() {
  const [trips, setTrips] = useTrips();
  const [trip, updateTrip, setTrip] = useTrip(trips);

  const tripsCounter = tripCounter(trips);

  const tripState = {
    trip,
    updateTrip,
    tripsCounter,
  };

  useEffect(() => {
    setTrips(trip);
    setLocalStorage({ trip, trips });
  }, [trip]);

  return (
    <>
      <Route exact path = "/shift/start-trip">
        <StartTrip {...tripState} />
      </Route>

      <Route path = "/shift/pickup">
        <Pickup {...tripState} />
      </Route>

      <Route path = "/shift/departure">
        <Departure
          {...tripState}
          setTrip = {setTrip}
        />
      </Route>

      <Route path = "/shift/trips">
        <Trips {...tripState} />
      </Route>

      <Route path = "/shift/delivery">
        <EndTrip {...tripState} />
      </Route>
    </>
  );
}
