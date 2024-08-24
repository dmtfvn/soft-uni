function solveCurTask(input) {
  let annualFee = Number(input[0]);

  let sneakers = annualFee - (annualFee * 40 / 100);
  let gear = sneakers - (sneakers * 20 / 100);
  let ball = gear / 4;
  let accessories = ball / 5;

  let totalCost = annualFee + sneakers + gear + ball + accessories;

  console.log(totalCost);
}

solveCurTask(["365"]);