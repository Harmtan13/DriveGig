function validateDataStamp(shift, timeStamp) {

  if (shift.timeStamps.length % 2 !== 0) {
    return [...shift.timeStamps, timeStamp];
  } else {
    return [...shift.timeStamps.slice(0,-1), timeStamp]
  }
}

export {validateDataStamp}