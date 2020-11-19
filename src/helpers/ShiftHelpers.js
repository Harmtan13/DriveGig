function determinePlacement(shift, timeStamp, placement = 0) {
  const determinePlacement = placement === 0 ? 0 : 1;
  const stampLength = shift.time.length;
  const placementEquation = stampLength % 2 !== determinePlacement;

  function attachStamp() {
    return [...shift.time, timeStamp];
  }

  function replaceStamp() {
    return [...shift.time.slice(0, -1), timeStamp];
  }


  return placementEquation ? attachStamp() : replaceStamp();
}

function addTimeStamp(setShift, shift, placement = 0) {
  const timeStamp = Date.now();
  const timeStamps = determinePlacement(shift, timeStamp, placement);

  const updatedShift = { ...shift, time: timeStamps };

  setShift(updatedShift);
  localStorage.setItem('shift', JSON.stringify(updatedShift));
}

function mergeShiftAndTripStamps({ shift, setShift, trip }) {
  const shiftCopy = { ...shift };
  const stampTitles = ['time', 'miles'];

  const consolidateTripStamps = (stamps) => {
    let consolidatedStamps = [];

    stamps.forEach((stamp) => {
      consolidatedStamps = [...consolidatedStamps, ...stamp];
    });

    return consolidatedStamps;
  };

  stampTitles.forEach((title) => {
    const mergedStamps = [...shift[title], ...consolidateTripStamps(trip[title])];
    const sortedStamps = mergedStamps.sort();
    const filteredStamps = sortedStamps.filter((a, b) => sortedStamps[b + 1] !== a && sortedStamps[b - 1] !== a);

    console.log(shift[title]);
    console.log(trip[title]);

    console.log(mergedStamps);
    console.log(sortedStamps);
    console.log(filteredStamps);

    shiftCopy[title] = filteredStamps;
  });

  setShift(shiftCopy);
  localStorage.setItem('shift', JSON.stringify(shiftCopy));
}

export { addTimeStamp, mergeShiftAndTripStamps };