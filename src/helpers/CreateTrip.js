const createTrip = (totalTrips) => {
  const id = totalTrips;
  const diner = '';
  const restaurant = '';
  const orderProvider = '';
  const miles = [[], []];
  const time = [[], [], []];
  const pay = {
    provider: '',
    tip: '',
  };
  const completed = false;

  return { id, orderProvider, diner, restaurant, miles, time, pay, completed };
};

export default createTrip;


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
