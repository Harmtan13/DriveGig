const getLocalStorage = (() => {
  const getItem = item => JSON.parse(localStorage.getItem(item));

  const trips = getItem('trips') || [];
  const trip = getItem('trip');
  const stamps = getItem('stamps');
  const isAddOn = getItem('isAddOn');
  const isTripComplete = getItem('isAddOn');

  return { trips, trip, isAddOn, stamps, isTripComplete };
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


export {
  getLocalStorage,
  setLocalStorage,
  createStamp,
  tripSort,
};