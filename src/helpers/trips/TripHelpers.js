const getSavedState = item => JSON.parse(localStorage.getItem(item));

const setSavedState = (state) => {
  for (const [key, value] of Object.entries(state)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const createStamp = (title, stampValue, stage, placement = 1, switchTrigger = false) => ({
  title,
  stampValue,
  stage,
  placement,
  switchTrigger,
});

const tripSort = (trips) => {
  const active = trips.filter(trip => trip.completed === false);
  const completed = trips.filter(trip => trip.completed === true);
  const total = trips;

  return { active, total, completed };
};


export {
  getSavedState,
  setSavedState,
  createStamp,
  tripSort,
};