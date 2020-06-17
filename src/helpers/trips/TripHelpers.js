const getLocalStorage = (() => {
  const trips = JSON.parse(localStorage.getItem('trips')) || [];
  const trip = JSON.parse(localStorage.getItem('trip'));
  const odometerStamps = JSON.parse(localStorage.getItem('odometerStamps'));
  const timeStamps = JSON.parse(localStorage.getItem('timeStamps'));
  
  return {trips, trip, timeStamps, odometerStamps}
})();

const setLocalStorage = (state) => {
  for (const [key, value] of Object.entries(state)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

const createStamp = (title, stampValue, stage, placement = 0) => {
  return {
    title,
    stage,
    placement,
    stampValue
  }
}

const tripCounter = (trips) => {
  const active = getLocalStorage.trips.filter(trip => trip.completed === false).length;

  const total = getLocalStorage.trips.length;
  
  return {active, total};
}

export {getLocalStorage, setLocalStorage, createStamp, tripCounter};