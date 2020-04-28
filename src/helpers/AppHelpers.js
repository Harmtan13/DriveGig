function addTimeStamp(placementFunction, setShift, shift, placement = 0) {
  const timeStamp = Date.now();
  const timeStamps = placementFunction(shift, timeStamp, placement);

  let updatedShift = {...shift, timeStamps};

  setShift(updatedShift);
  localStorage.setItem('shift', JSON.stringify(updatedShift));
}

function determinePlacement(shift, timeStamp, placement = 0) {
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


export { determinePlacement, addTimeStamp }