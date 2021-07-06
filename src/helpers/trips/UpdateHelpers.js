const stampManager = (stamps, stampInputs) => {
  const stampCopy = stamps;

  stampInputs.forEach((stamp) => {
    const { title, stampValue, stage, placement, switchTrigger } = stamp;

    if (stampValue) {
      const determineSliceBehavior = () => stampCopy.stage === stage && !switchTrigger;
      const takeFirstStamp = () => (stampCopy?.start[title]);
      const takeLastStamp = () => (stampCopy?.end[title]);

      const stampSet = determineSliceBehavior() ? takeFirstStamp() : takeLastStamp();

      stampCopy.start[title] = stampSet;
      stampCopy.stage = stage;
      stampCopy[placement][title] = stampValue;

      console.log(stampCopy);
    }
  });

  return stampCopy;
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