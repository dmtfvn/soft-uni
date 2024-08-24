function solveCurTask(input) {
  let budget = Number(input[0]);
  let gpu = Number(input[1]);
  let cpu = Number(input[2]);
  let ram = Number(input[3]);

  let gpuSum = gpu * 250;
  let cpuSum = cpu * gpuSum * 0.35;
  let ramSum = ram * gpuSum * 0.10;

  let totalSum = gpuSum + cpuSum + ramSum;

  if (gpu > cpu) {
    totalSum = totalSum * 0.85;
  }

  if (totalSum > budget) {
    console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
  } else {
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
  }
}

solveCurTask(["900", "2", "1", "3"]);