import {useState} from 'react';
import {getLocalStorage} from './TripHelpers';

function useTrips() {
  const [trips, setTrips] = useState(getLocalStorage.trips);

  const updateTrip = (trip) => {
    const determineTripPlacement = () => {
      const tripMatch = trips.find((eachTrip) => eachTrip.id === trip.id)
  
      return tripMatch ? true : false
    }
  
    const replaceTripsArray = () => {
      const updatedTrips = [...trips];
      updatedTrips[trip.id] = trip;
  
      setTrips(updatedTrips);
    }
  
    const updateTripsArray = () => {
      const updatedTrips = [...trips, trip];
  
      setTrips(updatedTrips);
    }
  
    return determineTripPlacement() ? replaceTripsArray() : updateTripsArray()
  }
  return [trips, updateTrip];
}

function useStamps(initialState) {
  const [stamps, setStamps] = useState(initialState);

  function updateStamps(stamp, index) {
    const newStamp = [...stamps];
    newStamp[index] = stamp;
    setStamps(newStamp);
  }
  
  return [stamps, updateStamps];
}

function useIndex() {
  const [index, setIndex] = useState(0)

  const updateIndex = (tripCount) => (
    tripCount <= 0 ? setIndex(0) : setIndex(tripCount - 1)
  );

  return [index, updateIndex]
}

export {useTrips, useStamps, useIndex}