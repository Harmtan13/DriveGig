import {useState} from 'react';
import {activeTrips} from './TripHelpers';

function useTrips() {
  const [trips, setTrips] = useState(activeTrips);

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

export {useTrips, useStamps}