function solveCurTask(input) {
  let budget = Number(input[0]);
  let overnightStayCount = Number(input[1]);
  let overnightStayPrice = Number(input[2]);
  let percentAdditionalCosts = Number(input[3]);

  let totalOvernightStayCost = 0;

  if (overnightStayCount > 7) {
    overnightStayPrice *= 0.95;
  } else if (overnightStayCount <= 7) {
    overnightStayPrice;
  }

  totalOvernightStayCost = overnightStayCount * overnightStayPrice;

  let additionalCosts = budget * percentAdditionalCosts / 100;
  totalOvernightStayCost += additionalCosts;

  if (totalOvernightStayCost <= budget) {
    console.log(`Ivanovi will be left with ${(budget - totalOvernightStayCost).toFixed(2)} leva after vacation.`);
  } else if (totalOvernightStayCost > budget) {
    console.log(`${(totalOvernightStayCost - budget).toFixed(2)} leva needed.`);
  }
}

solveCurTask(["500", "7", "66", "15"]);