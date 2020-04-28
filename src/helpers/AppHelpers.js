function validateDataStamp(shift, timeStamp, placement = 0) {
  const determinePlacement = placement === 0 ? 0 : 1;
  const stampLength = shift.timeStamps.length;
  const placementEquation = stampLength % 2 !== determinePlacement;

  function attachStamp() {
    return [...shift.timeStamps, timeStamp];
  }

  function replaceStamp() {
    return [...shift.timeStamps.slice(0,-1), timeStamp]
  }

  return placementEquation ? attachStamp() : replaceStamp();
}

export { validateDataStamp }