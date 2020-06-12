import {useState, useEffect} from 'react';
import {getLocalStorage} from './TripHelpers';
import createTrip from './../CreateTrip';

function useTrips() {
  const [trips, setTrips] = useState(getLocalStorage.trips);

  const updateTrips = (trip) => {
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
  return [trips, updateTrips];
}

function useStamps(initialState) {
  const [stamps, setStamps] = useState({
    miles: {
      title: 'miles',
      stage: 0,
      stampSet: [5],
      },

      time: {
        title: '',
        stage: 0,
        stampSet: [5]
      }
    }
  );

  const updateStamps = (stampInputs) => {

    stampInputs.forEach((stamp) => {
      const {title, stage, stampValue} = stamp;
      const stampCopy = {...stamps[title]};
      const stampSet = [...stampCopy.stampSet.slice(-1), stampValue];
      const newStamp = {...stampCopy, title, stage, stampSet};

      let updatedStamps = {...stamps}
      updatedStamps[title] = newStamp;

      setStamps(updatedStamps);
    })

  }

  return [stamps, updateStamps];
}

function useTrip() {
  const {trip: currentTrip, trips} = getLocalStorage;
  const [trip, setTrip] = useState(currentTrip || createTrip(trips));
  const [stamps, setStamps] = useStamps();
  let tripData = {};

  useEffect(() => {
    console.log(stamps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stamps])

  const updateTrip = (tripData) => {
    const {stampInputs, ...tripProps} = tripData;

    tripData = tripProps;
    setStamps(stampInputs);
  }

  return [trip, updateTrip]
}

export {useTrip, useTrips}