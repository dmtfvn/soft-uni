function solveCurTask(input) {
  let peopleCount = Number(input[0]);
  let season = input[1];

  let finalPrice = 0;

  switch (season) {
    case 'spring':
      if (peopleCount <= 5) {
        finalPrice = peopleCount * 50.00;
      } else if (peopleCount > 5) {
        finalPrice = peopleCount * 48.00;
      }
      break;
    case 'summer':
      if (peopleCount <= 5) {
        finalPrice = peopleCount * 48.50 * 0.85;
      } else if (peopleCount > 5) {
        finalPrice = peopleCount * 45.00 * 0.85;
      }
      break;
    case 'autumn':
      if (peopleCount <= 5) {
        finalPrice = peopleCount * 60.00;
      } else if (peopleCount > 5) {
        finalPrice = peopleCount * 49.50;
      }
      break;
    case 'winter':
      if (peopleCount <= 5) {
        finalPrice = peopleCount * 86.00 * 1.08;
      } else if (peopleCount > 5) {
        finalPrice = peopleCount * 85.00 * 1.08;
      }
      break;
  }

  console.log(`${finalPrice.toFixed(2)} leva.`);
}

solveCurTask(["10", "summer"]);