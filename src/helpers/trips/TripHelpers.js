const getLocalStorage = (() => {
  const getLocalItem = item => JSON.parse(localStorage.getItem(item));

  const trips = getLocalItem('trips') || [];
  const trip = getLocalItem('trip');
  const odometerStamps = getLocalItem('odometerStamps');
  const timeStamps = getLocalItem('timeStamps');
  const isAddOn = getLocalItem('isAddOn');

  return { trips, trip, timeStamps, odometerStamps, isAddOn };
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

export { getLocalStorage, setLocalStorage, createStamp, tripSort };