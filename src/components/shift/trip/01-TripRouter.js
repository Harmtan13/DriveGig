import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import MainShift from '../02-MainShift';
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
} from '../../../helpers/trips/TripHelpers';
import sortedState from '../../../helpers/trips/UpdateHelpers';
import { createTrip, createStamps } from '../../../helpers/CreationHelpers';
import { addTripToShift } from '../../../helpers/ShiftHelpers';

export default function TripRouter({ currentUser, ...shiftState }) {
  const {
    trips: localTrips,
    trip: localTrip,
    stamps: localStamps,
    switchTrigger: localSwitchTrigger } = getLocalStorage;

  const [trips, setTrips] = useState(localTrips || []);
  const [trip, setTrip] = useState(localTrip || createTrip(trips.length));
  const [stamps, setStamps] = useState(localStamps || createStamps(trips.length));
  const [switchTrigger, setSwitchTrigger] = useState(localSwitchTrigger || false);
  const tripsSort = tripSort(trips);

  const updateTrip = (tripData) => {
    const { sequenceTrigger, switchTriggerToggle, ...tripProps } = tripData;
    const sortProps = {
      ...tripProps,
      trip,
      trips,
      stamps,
    };

    const standardSequence = () => sortedState(sortProps);

    const addOnSequence = () => {
      const { updatedTrips } = sortedState(sortProps);
      const newTrip = createTrip(tripsSort.total.length);

      const stampInputs = [
        createStamp('miles', [...stamps.miles.stampSet].pop(), 0, 0),
        createStamp('time', [...stamps.time.stampSet].pop(), 0, 0),
      ];

      const newTripData = {
        stampInputs,
        stamps: createStamps(),
        trip: newTrip,
        trips: updatedTrips,
      };

      return sortedState(newTripData);
    };

    const determineSequence = sequenceTrigger ? addOnSequence() : standardSequence();

    const { updatedTrip, updatedTrips, sortedStamps } = determineSequence;

    setLocalStorage({
      trip: updatedTrip,
      trips: updatedTrips,
      stamps: sortedStamps,
      switchTrigger: switchTriggerToggle || false,
    });

    setStamps(sortedStamps);
    setTrip(updatedTrip);
    setTrips(updatedTrips);
    setSwitchTrigger(switchTriggerToggle);
  };

  useEffect(() => {
    if (trip.completed) {
      const shiftData = {
        ...shiftState,
        trip,
      };

      addTripToShift(shiftData);
    }
  }, [trips]);

  const tripState = {
    trip,
    updateTrip,
    tripsSort,
  };

  return (
    <>
      <Route exact path = "/shift">
        <MainShift
          {...shiftState}
          {...tripState}
          trips = {trips}
        />
      </Route>

      <Route exact path = "/shift/start-trip">
        <StartTrip
          {...tripState}
          currentUser = {currentUser}
          stamps = {stamps}
        />
      </Route>

      <Route path = "/shift/pickup">
        <Pickup {...tripState} />
      </Route>

      <Route path = "/shift/departure">
        <Departure
          {...tripState}
        />
      </Route>

      <Route path = "/shift/trips">
        <Trips
          {...tripState}
          setTrip = {setTrip}
        />
      </Route>

      <Route path = "/shift/delivery">
        <EndTrip
          {...tripState}
          switchTrigger = {switchTrigger}
        />
      </Route>

    </>
  );
}