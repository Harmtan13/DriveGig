const updateTripsHelper = (setTrips, trip, trips) => {
  const determineTripPlacement = () => {
    const lastTrip = trips.slice(-1).pop() || '';

    return trip.id === lastTrip.id ? true : false
  }

  console.log(determineTripPlacement());

  const updateTripsArray = () => {
    const updatedTrips = [...trips, trip];

    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  }

  const replaceTripsArray = () => {
    const updatedTrips = [...trips];
    updatedTrips[trip.id] = trip;

    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  }

  return determineTripPlacement() ? replaceTripsArray() : updateTripsArray()
}

const activeTripsHelper = trips => trips.filter(trip => trip.completed === false);

export {updateTripsHelper, activeTripsHelper};