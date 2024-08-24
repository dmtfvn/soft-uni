function solveCurTask(input) {
  let distance = Number(input[0]);
  let timeOfDay = input[1];

  let taxiPriceDay = 0.70 + distance * 0.79;
  let taxiPriceNight = 0.70 + distance * 0.90;

  let busPrice = distance * 0.09;

  let trainPrice = distance * 0.06;

  if (distance < 20) {
    if (timeOfDay === 'day') {
      console.log(taxiPriceDay.toFixed(2));
    } else if (timeOfDay === 'night') {
      console.log(taxiPriceNight.toFixed(2));
    }
  } else if (distance >= 20 && distance < 100) {
    console.log(busPrice.toFixed(2));
  } else if (distance >= 100) {
    console.log(trainPrice.toFixed(2));
  }
}

solveCurTask(["180", "night"]);