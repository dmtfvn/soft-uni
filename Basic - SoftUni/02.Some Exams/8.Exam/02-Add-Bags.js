function solveCurTask(input) {
  let bagageAbove20Kg = Number(input[0]);
  let bagageWeight = Number(input[1]);
  let daysToFlight = Number(input[2]);
  let bagageCount = Number(input[3]);

  if (bagageWeight < 10) {
    bagageAbove20Kg *= 0.20;
  } else if (bagageWeight >= 10 && bagageWeight <= 20) {
    bagageAbove20Kg *= 0.50;
  } else if (bagageWeight > 20) {
    bagageAbove20Kg;
  }

  if (daysToFlight > 30) {
    bagageAbove20Kg *= 1.10;
  } else if (daysToFlight >= 7 && daysToFlight <= 30) {
    bagageAbove20Kg *= 1.15;
  } else if (daysToFlight < 7) {
    bagageAbove20Kg *= 1.40;
  }

  let totalBagageCost = bagageAbove20Kg * bagageCount;

  console.log(`The total price of bags is: ${totalBagageCost.toFixed(2)} lv.`)
}

solveCurTask(["63.80", "23", "3", "1"]);