const stampManager = (stamps, stampInputs) => {
  const updatedStamps = stamps;

  stampInputs.forEach((stamp) => {
    const { title, stampValue, stage, placement, switchTrigger } = stamp;

    if (stampValue) {
      const stampCopy = { ...updatedStamps[title] };

      const determineSliceBehavior = () => stampCopy.stage === stage && !switchTrigger;
      const takeFirstStamp = () => ({start: stampCopy.stampSet.start});
      const takeLastStamp = () => ({start: stampCopy.stampSet.end});

      console.log(takeFirstStamp());

      const stampSet = determineSliceBehavior() ? takeFirstStamp() : takeLastStamp();

      stampSet[placement] = stampValue;
      console.log(stampSet);

      const newStamp = { 
        ...stampCopy,
        stampSet,
        stage
      };

      console.log(newStamp);

      updatedStamps[title] = newStamp;
    }
  });

  return updatedStamps;
};

const setUpdatedTrip = (trip, tripInfo, stamps) => {
  const tripCopy = { ...trip, ...tripInfo };

  Object.entries(stamps).forEach((stamp) => {
    const stampName = stamp[0];
    const stampInfo = stamp[1];

    const updateStamp = {...tripCopy[stampName]};

    updateStamp[stampInfo.stage] = stampInfo.stampSet;

    tripCopy[stampName] = updateStamp;
  });

  return tripCopy;
};

const setUpdatedTrips = (trips, trip) => {
  const determineTripPlacement = () => {
    const tripMatch = trips.find(eachTrip => eachTrip.id === trip.id);

    return !!tripMatch;
  };

  const replaceTripsArray = () => {
    const updatedTrips = [...trips];
    updatedTrips[trip.id] = trip;

    return updatedTrips;
  };

  const updateTripsArray = () => {
    const updatedTrips = [...trips, trip];

    return updatedTrips;
  };

  return determineTripPlacement() ? replaceTripsArray() : updateTripsArray();
};

export default function sortedState(tripData) {
  const { stamps, trip, trips, stampInputs, ...tripProps } = tripData;

  const sortedStamps = stampManager(stamps, stampInputs, trip.id);
  const updatedTrip = setUpdatedTrip(trip, tripProps, sortedStamps);
  const updatedTrips = setUpdatedTrips(trips, updatedTrip);

  return { sortedStamps, updatedTrip, updatedTrips };
}