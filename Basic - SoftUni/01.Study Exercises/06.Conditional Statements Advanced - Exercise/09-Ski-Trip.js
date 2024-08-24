function solveCurTask(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let feedback = input[2];

  let nights = days - 1;
  let finalCost = 0;

  if (nights < 10) {
    switch (roomType) {
      case 'room for one person':
        finalCost = nights * 18;
        break;
      case 'apartment':
        finalCost = nights * 25 * 0.70;
        break;
      case 'president apartment':
        finalCost = nights * 35 * 0.90;
        break;
    }
  } else if (nights <= 15) {
    switch (roomType) {
      case 'room for one person':
        finalCost = nights * 18;
        break;
      case 'apartment':
        finalCost = nights * 25 * 0.65;
        break;
      case 'president apartment':
        finalCost = nights * 35 * 0.85;
        break;
    }
  } else if (nights > 15) {
    switch (roomType) {
      case 'room for one person':
        finalCost = nights * 18;
        break;
      case 'apartment':
        finalCost = nights * 25 * 0.50;
        break;
      case 'president apartment':
        finalCost = nights * 35 * 0.80;
        break;
    }
  }

  if (feedback === 'positive') {
    finalCost *= 1.25;
  } else if (feedback === 'negative') {
    finalCost *= 0.90;
  }

  console.log(finalCost.toFixed(2));
}

solveCurTask(["30", "president apartment", "negative"]);