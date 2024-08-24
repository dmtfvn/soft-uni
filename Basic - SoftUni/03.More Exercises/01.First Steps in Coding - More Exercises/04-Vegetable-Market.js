function solveCurTask(input) {
  let vegetablesPrice = Number(input[0]);
  let fruitsPrice = Number(input[1]);
  let kilosOfVegetables = Number(input[2]);
  let kilosOfFruits = Number(input[3]);

  let oneEuro = 1.94;

  let vegetablesCost = vegetablesPrice * kilosOfVegetables;
  let fruitsCost = fruitsPrice * kilosOfFruits;

  let totalCost = (vegetablesCost + fruitsCost) / oneEuro;

  console.log(totalCost.toFixed(2));
}

solveCurTask(["0.194", "19.4", "10", "10"]);