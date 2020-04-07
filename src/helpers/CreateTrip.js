const trip = () => {
  let time = () => {
    let startTime;
    let endTime;
    let totalTime;

    return {startTime, endTime, totalTime}
  }
  
  let mileage;
  let waitTime;
  let orderProvider;
  let offer;
  let pay = () => {
    let totalPay
    let providerPay;
    let tip;

    return {totalPay, providerPay, tip}
  }

  return {time, mileage, waitTime, orderProvider, offer, pay}
}

export default trip;