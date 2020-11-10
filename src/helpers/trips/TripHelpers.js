const getLocalStorage = (() => {
  const getLocalItem = item => JSON.parse(localStorage.getItem(item));

  const trips = getLocalItem('trips') || [];
  const trip = getLocalItem('trip');
  const odometerStamps = getLocalItem('odometerStamps');
  const timeStamps = getLocalItem('timeStamps');
  const isAddOn = getLocalItem('isAddOn');
  const stampData = getLocalItem('stamps');

  return { trips, trip, timeStamps, odometerStamps, isAddOn, stampData };
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
  console.log(updatedStamps);

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

export { getLocalStorage, setLocalStorage, createStamp, stampManager, tripSort };