const createShift = () => {
  const odometer = [];
  const timeStamps = [];
  const trips = [];
  const completed = false;

  return {
    odometer,
    timeStamps,
    trips,
    completed,
  };
};

export default createShift;

// const createShift = () => {
//   let mileage;
//   let date;
//   let totalTime;
//   let nonActiveTime;
//   let trips;

//   return {
//     date,
//     totalTime,
//     nonActiveTime,
//     mileage,
//     trips
//   }
// }