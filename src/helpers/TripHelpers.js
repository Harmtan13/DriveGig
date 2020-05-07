const updateTripsHelper = (setTrips, trip, trips) => {
  const determineTripPlacement = () => {
    const lastTrip = trips.slice(-1).pop() || '';

    return trip.id === lastTrip.id ? true : false
  }

  const updateTripsArray = () => {
    const updatedTrips = [...trips, trip];

    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  }

  const replaceTripsArray = () => {
    const updatedTrips = [...trips.slice(0,-1), trip];

    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  }

  return determineTripPlacement() ? replaceTripsArray() : updateTripsArray()
}

export {updateTripsHelper};