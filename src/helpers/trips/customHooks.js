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
      stage: 0,
      stampSet: [],
      },

      time: {
        stage: 0,
        stampSet: []
      }
    }
  );

  const updateStamps = (stampInputs) => {
    let updatedStamps = {...stamps}

    stampInputs.forEach((stamp) => {
      const {title, stage, stampValue} = stamp;
      const stampCopy = {...stamps[title]};
      const stampSet = [...stampCopy.stampSet.slice(-1), stampValue];
      const newStamp = {...stampCopy, stage, stampSet};

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
  const [tripInfo, setTripInfo] = useState({});

  const updateTrip = (tripData) => {
    const {stampInputs, ...tripProps} = tripData;

    setTripInfo(tripProps);
    setStamps(stampInputs);
  }

  const setUpdatedTrip = () => {
    let tripCopy = {...trip, ...tripInfo};

    Object.entries(stamps).forEach(stamp => {
      const stampName = stamp[0];
      const stampInfo = stamp[1];

      let updateStamp = [...tripCopy[stampName]]
      updateStamp[stampInfo.stage] = stampInfo.stampSet;

      tripCopy[stampName] = updateStamp;
      setTrip(tripCopy);
    });
  }

  useEffect(() => {
    setUpdatedTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stamps, tripInfo])

  return [trip, updateTrip]
}

export {useTrip, useTrips}