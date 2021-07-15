import { currencyAddition } from "../AppHelpers";

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

      if (stampCopy.end[title]) {
        stampCopy.total[title] = stampCopy.end[title] - stampCopy.start[title];
      }
    }
  });

  return stampCopy;
};

const setUpdatedTrip = (trip, tripInfo, stampManager) => {
  const tripCopy = { ...trip, ...tripInfo };
  const {stage, ...extractedStamps} = stampManager

  const stamps =  JSON.parse(JSON.stringify(extractedStamps));

  if (stage === 'waitTime') {
    delete stamps.start.distance
    delete stamps.end.distance
    delete stamps.total.distance
  }

  tripCopy[stage] = stamps;

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

const statsCalculator = (item, stamps) => {
  const total = {}
   
  stamps.forEach((stamp) => {
    const currentValue = stamp.stampValue;
    const startValue = item?.start?.[stamp?.title] || null;
    const shiftBreak = item?.total?.break || 0;

    const totalValue = (currentValue - startValue) - shiftBreak;
    
    total[stamp.title] = startValue !== null ? totalValue : null
  })

  return total;
}

export default function sortedState(tripData) {
  const { stamps, trip, trips, stampInputs, ...tripProps } = tripData;

  tripProps.total = {...statsCalculator(trip, stampInputs)};

  const sortedStamps = stampManager(stamps, stampInputs, trip.id);
  const updatedTrip = setUpdatedTrip(trip, tripProps, sortedStamps);
  const updatedTrips = setUpdatedTrips(trips, updatedTrip);

  return { sortedStamps, updatedTrip, updatedTrips };
}