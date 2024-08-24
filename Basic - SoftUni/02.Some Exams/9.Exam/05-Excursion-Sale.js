function solveCurTask(input) {
  let seaCount = Number(input[0]);
  let mountainCount = Number(input[1]);

  let profit = 0;
  let price = 0;

  let i = 2;
  let current = input[i];

  while (current !== 'Stop') {
    let product = current;

    if (seaCount === 0 && mountainCount === 0) {
      console.log('Good job! Everything is sold.');
      break;
    }

    if (product === 'sea') {
      if (seaCount === 0) {
        i++;
        current = input[i];
        continue;
      } else {
        price = 680;
        seaCount--;
      }
    } else if (product === 'mountain') {
      if (mountainCount === 0) {
        i++;
        current = input[i];
        continue;
      } else {
        price = 499;
        mountainCount--;
      }
    }

    profit += price;

    i++;
    current = input[i];
  }

  console.log(`Profit: ${profit} leva.`);
}

solveCurTask(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);