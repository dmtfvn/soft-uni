function solveCurTask(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let veggieMenu = Number(input[2]);

  let chickenPrice = chickenMenu * 10.35;
  let fishPrice = fishMenu * 12.40;
  let veggiePrice = veggieMenu * 8.15;
  let takeAwayPrice = 2.50;

  let totalSum = chickenPrice + fishPrice + veggiePrice;
  let dessertPrice = totalSum * 20 / 100;
  let finalPrice = totalSum + dessertPrice + takeAwayPrice;

  console.log(finalPrice);
}

solveCurTask(["2", "4", "3"]);