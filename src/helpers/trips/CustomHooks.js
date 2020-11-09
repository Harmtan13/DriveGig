import { useState, useEffect } from 'react';
import { getLocalStorage, tripSort } from './TripHelpers';
import { createTrip } from '../CreationHelpers';

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

  const [stamps, setStamps] = useState({
    miles: {
      stage: 0,
      stampSet: stampData?.miles.stampSet || [],
    },

    time: {
      stage: 0,
      stampSet: stampData?.time.stampSet || [],
    },
  });

  const updateStamps = (stampInputs) => {
    const updatedStamps = { ...stamps };

    stampInputs.forEach((stamp) => {
      if (stamp.stampValue) {
        const { title, stage, placement, stampValue } = stamp;
        const stampCopy = { ...updatedStamps[title] };
        const stampSet = [...stampCopy.stampSet];
        stampSet[placement] = stampValue;
        const newStamp = { ...stampCopy, stage, stampSet };

        updatedStamps[title] = newStamp;
      }
    });

    setStamps(updatedStamps);
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
  const [trip, setTrip] = useTrip();
  // const [trips, setTrips] = useTrips();
  // const [stamps, setStamps] = useStamps();

  const updateTrip = (tripData) => {
    const { stampInputs, ...tripProps } = tripData;

    setTrip(tripData);
  };

  return [trip, updateTrip];
}

export { useTrip, useTrips, useAddOn, useUpdateTrip };