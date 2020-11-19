const createShift = () => {
  const miles = [];
  const time = [];
  const trips = [];
  const completed = false;

  return {
    miles,
    time,
    trips,
    completed,
  };
};

const createTrip = (totalTrips) => {
  const id = totalTrips;
  const diner = '';
  const restaurant = '';
  const orderProvider = '';
  const miles = [[], []];
  const time = [[]];
  const pay = {
    provider: '',
    tip: '',
  };
  const completed = false;

  return { id, orderProvider, diner, restaurant, miles, time, pay, completed };
};

const createStamps = () => {
  const miles = {
    stage: 0,
    stampSet: [],
  };

  const time = {
    stage: 0,
    stampSet: [],
  };

  return { miles, time };
};

export { createShift, createTrip, createStamps };


// Shift

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


// Trip

// let time = () => {
//   let startTime;
//   let endTime;
//   let totalTime;

//   return {startTime, endTime, totalTime}
// }

// let mileage;
// let waitTime;
// let orderProvider;
// let offer;
// let pay = () => {
//   let totalPay
//   let providerPay;
//   let tip;

//   return {totalPay, providerPay, tip}

// return {time, mileage, waitTime, orderProvider, offer, pay}

// StampsManager
// {
//   miles: {
//     stage: stampData?.miles.stage || 0,
//     stampSet: stampData?.miles.stampSet || [],
//   },

//   time: {
//     stage: stampData?.time.stage || 0,
//     stampSet: stampData?.time.stampSet || [],
//   },
// }