function solveCurTask(input) {
  let budget = Number(input[0]);
  let seriesCount = Number(input[1]);

  let totalCost = 0;

  for (let i = 2; i <= seriesCount * 2 + 1; i += 2) {
    let movie = input[i];
    let price = Number(input[i + 1]);

    if (movie === 'Thrones') {
      price *= 0.50;
    } else if (movie === 'Lucifer') {
      price *= 0.60;
    } else if (movie === 'Protector') {
      price *= 0.70;
    } else if (movie === 'TotalDrama') {
      price *= 0.80;
    } else if (movie === 'Area') {
      price *= 0.90;
    } else {
      price;
    }

    totalCost += price;
  }

  if (budget >= totalCost) {
    console.log(`You bought all the series and left with ${(budget - totalCost).toFixed(2)} lv.`);
  } else if (budget < totalCost) {
    console.log(`You need ${(totalCost - budget).toFixed(2)} lv. more to buy the series!`);
  }
}

solveCurTask(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]);