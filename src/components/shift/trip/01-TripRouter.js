import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import {
  setLocalStorage,
  tripSort,
} from '../../../helpers/trips/TripHelpers';
import { useTrip, useTrips, useAddOn } from '../../../helpers/trips/customHooks';
import createTrip from '../../../helpers/CreateTrip';

export default function TripRouter() {
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

  useEffect(() => {
    setTrips(trip);
  }, [trip]);

  useEffect(() => {
    setLocalStorage({ trip, trips, isAddOn, stamps });
  }, [trips]);

  useEffect(() => {
    if (addOnTrigger && isAddOn) {
      setTrip(createTrip(tripsSort.total.length));
      setIsAddOn(false);
    }
  }, [addOnTrigger]);

  return (
    <>
      <Route exact path = "/shift/start-trip">
        <StartTrip
          {...tripState}
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