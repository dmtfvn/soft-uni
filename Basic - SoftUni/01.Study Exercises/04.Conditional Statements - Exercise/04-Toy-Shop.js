function solveCurTask(input) {
  let tripCost = Number(input[0]);
  let toysPuzzles = Number(input[1]);
  let toysDolls = Number(input[2]);
  let toysBears = Number(input[3]);
  let toysMinions = Number(input[4]);
  let toysTrucks = Number(input[5]);

  let puzzlesFinalPrice = toysPuzzles * 2.60;
  let dollsFinalPrice = toysDolls * 3;
  let bearsFinalPrice = toysBears * 4.10;
  let minionsFinalPrice = toysMinions * 8.20;
  let trucksFinalPrice = toysTrucks * 2;

  let totalPrice = puzzlesFinalPrice + dollsFinalPrice + bearsFinalPrice + minionsFinalPrice + trucksFinalPrice;
  let toysCount = toysPuzzles + toysDolls + toysBears + toysMinions + toysTrucks;

  if (toysCount >= 50) {
    totalPrice = totalPrice * 0.75;
  }

  let priceAfterRent = totalPrice * 0.90;

  if (priceAfterRent >= tripCost) {
    console.log(`Yes! ${(priceAfterRent - tripCost).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(tripCost - priceAfterRent).toFixed(2)} lv needed.`);
  }
}

solveCurTask(["40.8", "20", "25", "30", "50", "10"]);