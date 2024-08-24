function solveCurTask(input) {
  let budget = Number(input[0]);
  let litersFuel = Number(input[1]);
  let dayOfWeekend = input[2];

  let fuelPriceForLiter = 2.10;
  let totalFuelCost = litersFuel * fuelPriceForLiter;

  let tourGuideCost = 100;
  let finalCost = totalFuelCost + tourGuideCost;

  if (dayOfWeekend === 'Saturday') {
    finalCost *= 0.90;
  } else if (dayOfWeekend === 'Sunday') {
    finalCost *= 0.80;
  }

  if (finalCost <= budget) {
    console.log(`Safari time! Money left: ${(budget - finalCost).toFixed(2)} lv.`);
  } else if (finalCost > budget) {
    console.log(`Not enough money! Money needed: ${(finalCost - budget).toFixed(2)} lv.`);
  }
}

solveCurTask(["120", "30", "Saturday"]);