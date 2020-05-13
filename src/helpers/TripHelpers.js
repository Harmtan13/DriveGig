const updateTripsHelper = (setTrips, trip, trips) => {
  const determineTripPlacement = () => {
    const tripMatch = trips.filter((eachTrip) => eachTrip.id === trip.id)

    return tripMatch ? true : false
  }

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