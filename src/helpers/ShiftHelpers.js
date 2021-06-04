function addTripToShift({ shift, setShift, trip }) {
  const shiftCopy = shift;
  shiftCopy.trips = [...shiftCopy.trips, trip];

  setShift(shiftCopy);
  localStorage.setItem('shift', JSON.stringify(shiftCopy));
}

export { addTripToShift };