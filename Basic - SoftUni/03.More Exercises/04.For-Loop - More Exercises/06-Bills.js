function solveCurTask(input) {
  let period = Number(input[0]);

  let water = 20;
  let internet = 15;

  let totalElectricity = 0;
  let totalWater = 0;
  let totalInternet = 0;
  let totalOthers = 0;

  for (let i = 1; i <= period; i++) {
    let electricity = Number(input[i]);

    totalElectricity += electricity;
    totalWater += water;
    totalInternet += internet;
    totalOthers += (electricity + water + internet) * 1.20;
  }

  let avgPerMonth = (totalElectricity + totalWater + totalInternet + totalOthers) / period;

  console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
  console.log(`Water: ${totalWater.toFixed(2)} lv`);
  console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
  console.log(`Other: ${totalOthers.toFixed(2)} lv`);
  console.log(`Average: ${avgPerMonth.toFixed(2)} lv`);
}

solveCurTask(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);