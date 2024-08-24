function solveCurTask(input) {
  let juniorCyclists = Number(input[0]);
  let seniorCyclists = Number(input[1]);
  let trackType = input[2];

  let totalCyclist = juniorCyclists + seniorCyclists;

  let priceJuniorTrail = juniorCyclists * 5.50;
  let priceSeniorTrail = seniorCyclists * 7;
  let priceTotalTrail = priceJuniorTrail + priceSeniorTrail;

  let priceJuniorCrCtry = juniorCyclists * 8;
  let priceSeniorCrCtry = seniorCyclists * 9.50;
  let priceTotalCrCtry = priceJuniorCrCtry + priceSeniorCrCtry;

  let priceJuniorDownhill = juniorCyclists * 12.25;
  let priceSeniorDownhill = seniorCyclists * 13.75;
  let priceTotalDownhill = priceJuniorDownhill + priceSeniorDownhill;

  let priceJuniorRoad = juniorCyclists * 20;
  let priceSeniorRoad = seniorCyclists * 21.50;
  let priceTotalRoad = priceJuniorRoad + priceSeniorRoad;

  switch (trackType) {
    case 'trail':
      console.log((priceTotalTrail *= 0.95).toFixed(2));
      break;
    case 'cross-country':
      if (totalCyclist >= 50) {
        console.log(((priceTotalCrCtry *= 0.95) * 0.75).toFixed(2));
      } else {
        console.log((priceTotalCrCtry *= 0.95).toFixed(2));
      }
      break;
    case 'downhill':
      console.log((priceTotalDownhill *= 0.95).toFixed(2));
      break;
    case 'road':
      console.log((priceTotalRoad *= 0.95).toFixed(2));
      break;
  }
}

solveCurTask(["3", "40", "road"]);