import { useState } from 'react';
import { getLocalStorage, setLocalStorage, stampManager } from './TripHelpers';
import { createTrip, createStamp } from '../CreationHelpers';

function useTrips() {
  const [trips, setTrips] = useState(getLocalStorage.trips);

  const updateTrips = (trip) => {
    const determineTripPlacement = () => {
      const tripMatch = trips.find(eachTrip => eachTrip.id === trip.id);

      return !!tripMatch;
    };

    const replaceTripsArray = () => {
      const updatedTrips = [...trips];
      updatedTrips[trip.id] = trip;

      setTrips(updatedTrips);
    };

    const updateTripsArray = () => {
      const updatedTrips = [...trips, trip];


      setTrips(updatedTrips);
    };

    return determineTripPlacement() ? replaceTripsArray() : updateTripsArray();
  };
  return [trips, updateTrips];
}

function useStamps() {
  const { stampData } = getLocalStorage;

  const [stamps, setStamps] = useState(stampData || createStamp());

  const updateStamps = (stampData) => {
    setLocalStorage({ stampData });
    setStamps(stampData);
  };

  return [stamps, updateStamps];
}

function useTrip(trips) {
  // const tripsCount = tripSort(trips);
  const { trip: currentTrip } = getLocalStorage;
  const [trip, setTrip] = useState(currentTrip || createTrip(0));
  const [tripInfo, setTripInfo] = useState({});

  const updateTrip = (tripData) => {
    console.log(tripData);
  };

  return [trip, updateTrip];
}

function useAddOn() {
  const addOnStatus = getLocalStorage.isAddOn;
  const [isAddOn, setIsAddOn] = useState(addOnStatus || false);

  return [isAddOn, setIsAddOn];
}

function useUpdateTrip() {
  const [stamps, setStamps] = useStamps();
  const [trip, setTrip] = useTrip();
  // const [trips, setTrips] = useTrips();

  const updateTrip = (tripData) => {
    const { stampInputs, ...tripProps } = tripData;
    const sortedStamps = stampManager(stamps, stampInputs);

    setTrip({ sortedStamps, tripProps });
    setStamps(sortedStamps);
  };

  return [trip, updateTrip];
}

export { useTrip, useTrips, useAddOn, useUpdateTrip };