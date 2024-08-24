function solveCurTask(input) {
  let guestsCount = Number(input[0]);
  let budget = Number(input[1]);

  let singleEasterBread = 4;
  let singleEasterEgg = 0.45;

  let totalEasterBreadsCount = Math.ceil(guestsCount / 3);
  let totalEasterBreadsPrice = singleEasterBread * totalEasterBreadsCount;

  let totalEasterEggsCount = guestsCount * 2;
  let totalEasterEggsPrice = singleEasterEgg * totalEasterEggsCount;

  let totalCost = totalEasterBreadsPrice + totalEasterEggsPrice;

  if (totalCost <= budget) {
    console.log(`Lyubo bought ${totalEasterBreadsCount} Easter bread and ${totalEasterEggsCount} eggs.`);
    console.log(`He has ${(budget - totalCost).toFixed(2)} lv. left.`);
  } else if (totalCost > budget) {
    console.log("Lyubo doesn't have enough money.");
    console.log(`He needs ${(totalCost - budget).toFixed(2)} lv. more.`);
  }
}

solveCurTask(["10", "35"]);