function solveCurTask(input) {
  let budget = Number(input[0]);
  let actors = Number(input[1]);
  let costume = Number(input[2]);

  let decorCost = budget * 0.10;
  let costForCostume = actors * costume;

  if (actors > 150) {
    costForCostume = costForCostume * 0.90;
  }

  let totalExpenses = decorCost + costForCostume;

  let moneyAfterExpenses = budget - totalExpenses;

  if (moneyAfterExpenses >= 0) {
    console.log('Action!');
    console.log(`Wingard starts filming with ${moneyAfterExpenses.toFixed(2)} leva left.`);
  } else {
    console.log('Not enough money!');
    console.log(`Wingard needs ${Math.abs(moneyAfterExpenses).toFixed(2)} leva more.`);
  }
}

solveCurTask(["20000", "120", "55.5"]);