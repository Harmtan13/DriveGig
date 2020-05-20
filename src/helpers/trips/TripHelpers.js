const storage = (() => {
  const trips = JSON.parse(localStorage.getItem('trips')) || [];
  const trip = JSON.parse(localStorage.getItem('trip'));
  const odometerStamps = JSON.parse(localStorage.getItem('odometerStamps'));
  const timeStamps = JSON.parse(localStorage.getItem('timeStamps'));
  
  return {trips, trip, timeStamps, odometerStamps}
})();

const activeTrips = storage.trips.filter(trip => trip.completed === false);
const currentTrip = activeTrips[activeTrips.length - 1];

export {storage, activeTrips, currentTrip};