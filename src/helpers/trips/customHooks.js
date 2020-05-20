import {useState} from 'react';
import {storage} from './TripHelpers';

function useTrips() {
  const [trips, setTrips] = useState(storage.trips);

  const updateTrip = (trip) => {
    const determineTripPlacement = () => {
      const tripMatch = trips.find((eachTrip) => eachTrip.id === trip.id)
  
      return tripMatch ? true : false
    }
  
    const replaceTripsArray = () => {
      const updatedTrips = [...trips];
      updatedTrips[trip.id] = trip;
  
      setTrips(updatedTrips);
      localStorage.setItem('trips', JSON.stringify(updatedTrips));
    }
  
    const updateTripsArray = () => {
      const updatedTrips = [...trips, trip];
  
      setTrips(updatedTrips);
      localStorage.setItem('trips', JSON.stringify(updatedTrips));
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