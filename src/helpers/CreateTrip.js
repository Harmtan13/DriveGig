const createTrip = (trips) => {
    let id = trips.length;
    let orderProvider = '';
    let odometer = [];
    let driveTime = [];
    let waitTime = [];
    let pay = {
      provider: '',
      tip: '',
      total: ''
  }

  return {id, orderProvider, odometer, driveTime, waitTime, pay}
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