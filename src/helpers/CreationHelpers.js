const createShift = (totalShifts) => {
  const id = totalShifts
  const stageInfo = {

  };
  const trips = [];
  const completed = false;

  return {
    id,
    trips,
    stageInfo,
    completed,
  };
};

const createTrip = (totalTrips) => {
  const id = totalTrips;
  const diner = '';
  const restaurant = '';
  const orderProvider = '';
  const stageInfo = {
    pickup: {
      start: {},
      end: {},
      total: {}
    }
  }
  const pay = {
    provider: '',
    tip: '',
  };
  const completed = false;

  return { id, orderProvider, diner, restaurant, stageInfo, pay, completed };
};

const createStamps = () => {
  const stage = 'pickup';

  const start = {
    time: 0,
    distance: 0
  }

  const end = {
    time: 0,
    distance: 0
  }

  const total = {
    time: 0,
    distance: 0
  }

  return {stage, start, end, total };
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