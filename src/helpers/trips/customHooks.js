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

export {useTrips}