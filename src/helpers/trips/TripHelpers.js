const getLocalStorage = (() => {
  const getLocalItem = item => JSON.parse(localStorage.getItem(item));

  const trips = getLocalItem('trips') || [];
  const trip = getLocalItem('trip');
  const isAddOn = getLocalItem('isAddOn');
  const stamps = getLocalItem('stamps');

  return { trips, trip, isAddOn, stamps };
})();

const setLocalStorage = (state) => {
  for (const [key, value] of Object.entries(state)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const createStamp = (title, stampValue, stage, placement = 1) => ({
  title,
  stampValue,
  stage,
  placement,
});

const tripSort = (trips) => {
  const active = trips.filter(trip => trip.completed === false);
  const completed = trips.filter(trip => trip.completed === true);
  const total = trips;

  return { active, total, completed };
};

const stampManager = (stamps, stampInputs) => {
  const updatedStamps = stamps;

  stampInputs.forEach((stamp) => {
    if (stamp.stampValue) {
      const { title, stage, placement, stampValue } = stamp;
      const stampCopy = { ...updatedStamps[title] };
      const stampSet = [...stampCopy.stampSet];
      stampSet[placement] = stampValue;
      const newStamp = { ...stampCopy, stage, stampSet };

      updatedStamps[title] = newStamp;
    }
  });

  return updatedStamps;
};

const setUpdatedTrip = (trip, tripInfo, stamps) => {
  const tripCopy = { ...trip, ...tripInfo };

  Object.entries(stamps).forEach((stamp) => {
    const stampName = stamp[0];
    const { stage, stampSet } = stamp[1];

    const updateStamp = [...tripCopy[stampName]];
    updateStamp[stage] = stampSet.slice(stage, stage + 2);

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

export {
  getLocalStorage,
  setLocalStorage,
  createStamp,
  stampManager,
  tripSort,
  setUpdatedTrip,
  setUpdatedTrips,
};