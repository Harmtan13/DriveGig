import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import {
  tripSort,
  createStamp,
} from '../../../helpers/trips/TripHelpers';
import { useTrip, useTrips, useAddOn, useUpdateTrip } from '../../../helpers/trips/CustomHooks';
import { createTrip } from '../../../helpers/CreationHelpers';

export default function TripRouter() {
  const [penis, setedTrip] = useUpdateTrip();
  const [trips, setTrips] = useTrips();
  const [trip, updateTrip, setTrip, stamps, setStamps] = useTrip(trips);
  const [isAddOn, setIsAddOn] = useAddOn();
  const addOnTrigger = trips[0]?.time[1] ? trips[0]?.time[1].length === 2 : '';
  const tripsSort = tripSort(trips);

  const tripState = {
    trip,
    updateTrip,
    tripsSort,
  };

  return (
    <>
      <Route exact path = "/shift/start-trip">
        <StartTrip
          {...tripState}
          updatedTrip = {setedTrip}
          isAddOn = {isAddOn}
          stamps = {stamps}
        />
      </Route>

      <Route path = "/shift/pickup">
        <Pickup {...tripState} />
      </Route>

      <Route path = "/shift/departure">
        <Departure
          {...tripState}
          setIsAddOn = {setIsAddOn}
        />
      </Route>

      <Route path = "/shift/trips">
        <Trips
          {...tripState}
          setTrip = {setTrip}
          setStamps = {setStamps}
        />
      </Route>

      <Route path = "/shift/delivery">
        <EndTrip {...tripState} />
      </Route>
    </>
  );
}