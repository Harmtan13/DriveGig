import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import Trips from './05-Trips';
import EndTrip from './06-EndTrip';
import {
  tripSort,
  getLocalStorage,
  setLocalStorage,
  createStamp,
  stampManager,
  setUpdatedTrip,
  setUpdatedTrips,
} from '../../../helpers/trips/TripHelpers';
import { createTrip, createStamps } from '../../../helpers/CreationHelpers';

export default function TripRouter() {
  const {
    trips: localTrips,
    trip: localTrip,
    stamps: localStamps,
    isAddOn: localAddOn } = getLocalStorage;

  const [trips, setTrips] = useState(localTrips || []);
  const [trip, setTrip] = useState(localTrip || createTrip(trips.length));
  const [stamps, setStamps] = useState(localStamps || createStamps());
  const [isAddOn, setIsAddOn] = useState(localAddOn || false);
  const addOnTrigger = trips[0]?.time[1] ? trips[0]?.time[1].length === 2 : '';
  const tripsSort = tripSort(trips);

  const updateTrip = (tripData) => {
    const { stampInputs, ...tripProps } = tripData;
    const stampsToSend = isAddOn ? createStamps() : stamps;

    const sortedStamps = stampManager(stampsToSend, stampInputs);
    const updatedTrip = setUpdatedTrip(trip, tripProps, sortedStamps);
    const updatedTrips = setUpdatedTrips(trips, updatedTrip);

    setLocalStorage({
      trip: updatedTrip,
      trips: updatedTrips,
      isAddOn,
      stamps: sortedStamps,
    });

    setStamps(sortedStamps);
    setTrip(updatedTrip);
    setTrips(updatedTrips);
  };

  const tripState = {
    trip,
    updateTrip,
    tripsSort,
  };

  useEffect(() => {
    if (addOnTrigger && isAddOn) {
      const stampInputs = [
        createStamp('miles', [...stamps.miles.stampSet].pop(), 0, 0),
        createStamp('time', [...stamps.time.stampSet].pop(), 0, 0),
      ];
      const newTrip = createTrip(tripsSort.total.length);

      updateTrip({ stampInputs, ...newTrip });
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