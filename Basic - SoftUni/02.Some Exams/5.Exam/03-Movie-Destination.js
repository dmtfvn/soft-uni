function solveCurTask(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let totalDays = Number(input[3]);

  let finalPrice = 0;

  switch (destination) {
    case 'Dubai':
      if (season === 'Winter') {
        finalPrice = totalDays * 45000 * 0.70;
      } else if (season === 'Summer') {
        finalPrice = totalDays * 40000 * 0.70;
      }
      break;
    case 'Sofia':
      if (season === 'Winter') {
        finalPrice = totalDays * 17000 * 1.25;
      } else if (season === 'Summer') {
        finalPrice = totalDays * 12500 * 1.25;
      }
      break;
    case 'London':
      if (season === 'Winter') {
        finalPrice = totalDays * 24000;
      } else if (season === 'Summer') {
        finalPrice = totalDays * 20250;
      }
      break;
  }

  if (finalPrice <= budget) {
    console.log(`The budget for the movie is enough! We have ${(budget - finalPrice).toFixed(2)} leva left!`);
  } else if (finalPrice > budget) {
    console.log(`The director needs ${(finalPrice - budget).toFixed(2)} leva more!`);
  }
}

solveCurTask(["400000", "Sofia", "Winter", "20"]);