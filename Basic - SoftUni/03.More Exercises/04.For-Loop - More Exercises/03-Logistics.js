function solveCurTask(input) {
  let loadCount = Number(input[0]);

  let busVol = 0;
  let truckVol = 0;
  let trainVol = 0;

  let busPrice = 200;
  let truckPrice = 175;
  let trainPrice = 120;

  for (let i = 1; i <= loadCount; i++) {
    let volume = Number(input[i]);

    if (volume <= 3) {
      busVol += volume;
    } else if (volume <= 11) {
      truckVol += volume;
    } else {
      trainVol += volume;
    }
  }

  let totalVol = busVol + truckVol + trainVol;
  let avgPrice = (busVol * busPrice + truckVol * truckPrice + trainVol * trainPrice) / totalVol;

  let busPercent = busVol / totalVol * 100;
  let truckPercent = truckVol / totalVol * 100;
  let trainPercent = trainVol / totalVol * 100;

  console.log(avgPrice.toFixed(2));
  console.log(`${busPercent.toFixed(2)}%`);
  console.log(`${truckPercent.toFixed(2)}%`);
  console.log(`${trainPercent.toFixed(2)}%`);
}

solveCurTask(["5", "2", "10", "20", "1", "7"]);