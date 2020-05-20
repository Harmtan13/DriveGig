const getLocalStorage = (() => {
  const trips = JSON.parse(localStorage.getItem('trips')) || [];
  const trip = JSON.parse(localStorage.getItem('trip'));
  const odometerStamps = JSON.parse(localStorage.getItem('odometerStamps'));
  const timeStamps = JSON.parse(localStorage.getItem('timeStamps'));
  
  return {trips, trip, timeStamps, odometerStamps}
})();

const setLocalStorage = (state) => {
  for (const [key, value] of Object.entries(state)) {
    console.log(key, JSON.stringify(value));
    localStorage.setItem(key, JSON.stringify(value));
  }
}

const activeTrips = getLocalStorage.trips.filter(trip => trip.completed === false);
const currentTrip = getLocalStorage.trip;

export {getLocalStorage, setLocalStorage, activeTrips, currentTrip};