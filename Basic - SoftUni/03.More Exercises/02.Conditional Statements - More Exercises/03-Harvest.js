function solveCurTask(input) {
  let grapeArea = Number(input[0]);
  let grapeSqMeter = Number(input[1]);
  let reqWineLiters = Number(input[2]);
  let workers = Number(input[3]);

  let vineyardField = grapeArea * grapeSqMeter;
  let wineLiters = vineyardField * 0.40 / 2.5;

  let excessWine = wineLiters - reqWineLiters;

  let winePerWorker = excessWine / workers;

  if (wineLiters >= reqWineLiters) {
    console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
    console.log(`${Math.ceil(excessWine)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
  } else if (wineLiters < reqWineLiters) {
    console.log(`It will be a tough winter! More ${Math.floor(reqWineLiters - wineLiters)} liters wine needed.`);
  }
}

solveCurTask(["1020", "1.5", "425", "4"]);