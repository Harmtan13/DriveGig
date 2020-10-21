import { useState, useEffect } from 'react';
import { getLocalStorage, tripSort } from './TripHelpers';
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
  const { stampData } = getLocalStorage;

  const [stamps, setStamps] = useState({
    miles: {
      stage: 0,
      stampSet: stampData.miles.stampSet || [],
    },

    time: {
      stage: 0,
      stampSet: stampData.time.stampSet || [],
    },
  });

  const updateStamps = (stampInputs) => {
    const updatedStamps = { ...stamps };


    stampInputs.forEach((stamp) => {
      if (stamp.stampValue) {
        const { title, stage, placement, stampValue } = stamp;
        const stampCopy = { ...stamps[title] };
        const stampSet = [...stampCopy.stampSet];
        stampSet[placement] = stampValue;
        const newStamp = { ...stampCopy, stage, stampSet };

        updatedStamps[title] = newStamp;

        setStamps(updatedStamps);
      }
    });
  };

  return [stamps, updateStamps];
}

function useTrip(trips) {
  const tripsCount = tripSort(trips);
  const { trip: currentTrip } = getLocalStorage;
  const [trip, setTrip] = useState(currentTrip || createTrip(tripsCount.total.length));
  const [stamps, setStamps] = useStamps();
  const [tripInfo, setTripInfo] = useState({});

  const setUpdatedTrip = () => {
    const tripCopy = { ...trip, ...tripInfo };

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
    const { stampInputs, ...tripProps } = tripData;

    setTripInfo(tripProps);
    setStamps(stampInputs);
    setUpdatedTrip();
  };

  useEffect(() => {
    setUpdatedTrip();
  }, [stamps, tripInfo]);

  return [trip, updateTrip, setTrip, stamps];
}

function useAddOn() {
  const addOnStatus = getLocalStorage.isAddOn;
  const [isAddOn, setIsAddOn] = useState(addOnStatus || false);

  return [isAddOn, setIsAddOn];
}


export { useTrip, useTrips, useStamps, useAddOn };