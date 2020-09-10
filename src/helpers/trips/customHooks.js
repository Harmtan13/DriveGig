import { useState, useEffect } from 'react';
import { getLocalStorage, tripCounter } from './TripHelpers';
import createTrip from '../CreateTrip';

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
  const trip = getLocalStorage?.trip;

  const [stamps, setStamps] = useState({
    miles: {
      stage: 0,
      stampSet: trip?.miles[trip?.miles.length - 1] || [],
    },

    time: {
      stage: 0,
      stampSet: trip?.time[trip?.time.length - 1] || [],
    },
  });

  const updateStamps = (stampInputs) => {
    const updatedStamps = { ...stamps };

    if (stampInputs) {
      stampInputs.forEach((stamp) => {
        const { title, stage, placement, stampValue } = stamp;
        const stampCopy = { ...stamps[title] };
        const stampSet = [...stampCopy.stampSet];
        stampSet[placement] = stampValue;
        const newStamp = { ...stampCopy, stage, stampSet };

        updatedStamps[title] = newStamp;

        setStamps(updatedStamps);
      });
    }
  };

  return [stamps, updateStamps];
}

function useTrip(trips) {
  const tripsCount = tripCounter(trips);
  const { trip: currentTrip } = getLocalStorage;
  const [trip, setTrip] = useState(currentTrip || createTrip(tripsCount.total));
  const [stamps, setStamps] = useStamps();
  const [tripInfo, setTripInfo] = useState({});

  const setUpdatedTrip = (workingTrip) => {
    const tripCopy = workingTrip;

    Object.entries(stamps).forEach((stamp) => {
      const stampName = stamp[0];
      const stampInfo = stamp[1];

      const updateStamp = [...tripCopy[stampName]];
      updateStamp[stampInfo.stage] = stampInfo.stampSet;

      tripCopy[stampName] = updateStamp;
      setTrip(tripCopy);
    });
  };

  const updateTrip = (tripData) => {
    const { stampInputs, isAddOn, ...tripProps } = tripData;

    const standardSequence = () => {
      const tripCopy = { ...trip, ...tripInfo };

      setTripInfo(tripProps);
      setStamps(stampInputs);
      setUpdatedTrip(tripCopy);
    };

    const addOnSequence = () => {
      const initialTrip = getLocalStorage.trips[0];
      console.log(initialTrip);

      standardSequence();
    };

    return !isAddOn ? standardSequence() : addOnSequence();
  };

  useEffect(() => {
    setUpdatedTrip();
  }, [stamps, tripInfo]);

  return [trip, updateTrip, setTrip];
}

export { useTrip, useTrips };
