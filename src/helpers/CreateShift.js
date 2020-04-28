const createShift = () => {
  const odometer = [];
  const timeStamps = [];
  const trips = [];

  return {
    odometer,
    timeStamps,
    trips
  }
}

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