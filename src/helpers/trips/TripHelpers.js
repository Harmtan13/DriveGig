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

const currentTrip = getLocalStorage.trip;

function stampManager(args) {
  const {
    timeStamps,
    odometerStamps,
    trip,
    // setTimeStamps, 
    // setOdometerStamps,
    setTrip
  } = args


  function addStampsToTrips() { 
    const miles = [odometerStamps]
    const time = [timeStamps]
    const updatedTrip = {...trip, time, miles}
    setTrip(updatedTrip)
  }

  addStampsToTrips()
}

export {getLocalStorage, setLocalStorage, currentTrip, stampManager};