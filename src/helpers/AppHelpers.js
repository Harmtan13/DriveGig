const round = (number) => {
  return Number(Math.round(number+'e'+2)+'e-'+2);
}

const currencyAddition = (amount1, amount2) => {
  return (amount1 * 100 + amount2 * 100) / 100
}

const runRate = (time, pay) => {
  return round((3600000 / time * pay))
}

export {
  round,
  currencyAddition,
  runRate
};