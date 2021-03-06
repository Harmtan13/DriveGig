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
  getSavedState,
  setSavedState,
  createStamp,
} from '../../../helpers/trips/TripHelpers';
import sortedState from '../../../helpers/trips/UpdateHelpers';
import { createTrip, createStamps } from '../../../helpers/CreationHelpers';
import { addTripToShift } from '../../../helpers/ShiftHelpers';

export default function TripRouter(
  { currentUser, 
    setStage, 
    updateShift, 
    shiftStageId, 
    setShiftStageId, 
    ...shiftState 
  }) {

  const [trips, setTrips] = useState(
    getSavedState('trips') || []
  );

  const [trip, setTrip] = useState(
    getSavedState('trip') || createTrip(trips.length)
  );

  const [stamps, setStamps] = useState(
    getSavedState('tripStamps') || createStamps()
  );

  const [switchTrigger, setSwitchTrigger] = useState(
    getSavedState('switchTrigger') || false
  );
  
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

      const start = {
        time: stamps.end.time,
        distance: stamps.end.distance
      }

      const stampInputs = [
        createStamp({
          title: 'distance', 
          stampValue: start.distance, 
          stage: 'pickup', 
          placement: 'start',
          switchTrigger: true
      }),

        createStamp({
          title: 'time',
          stampValue: start.time, 
          stage: 'pickup', 
          placement: 'start',
          switchTrigger: true
        }),
      ];

      const newTripData = {
        stampInputs,
        stamps: createStamps(),
        trip: newTrip,
        trips: updatedTrips,
        start
      };

      return sortedState(newTripData);
    };

    const determineSequence = sequenceTrigger ? addOnSequence() : standardSequence();

    const { updatedTrip, updatedTrips, sortedStamps } = determineSequence;

    setSavedState({
      trip: updatedTrip,
      trips: updatedTrips,
      tripStamps: sortedStamps,
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
    setStage,
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
          updateShift = {updateShift}
          setShiftStageId = {setShiftStageId}
          shiftStageId = {shiftStageId}
        />
      </Route>

      <Route path = "/shift/pickup">
        <Pickup
          {...tripState}
          currentUser = {currentUser}
        />
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
          updateShift = {updateShift}
          switchTrigger = {switchTrigger}
          setShiftStageId = {setShiftStageId}
          shiftStageId = {shiftStageId}
        />
      </Route>

    </>
  );
}