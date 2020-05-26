const createTrip = (trips) => {
    let id = trips.length;
    let diner = '';
    let restaurant = '';
    let orderProvider = '';
    let miles = [ [], [] ];
    let time = [ [], [], [] ];
    let pay = {
      provider: '',
      tip: ''
    }
    let completed = false;

  return {id, orderProvider, diner, restaurant, miles, time, pay, completed}
}

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