function solveCurTask(input) {
  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let priceForToy = Number(input[2]);

  let moneySaved = 0;
  let moneyGiven = 10;

  for (let birthday = 1; birthday <= age; birthday++) {
    if (birthday % 2 === 0) {
      moneySaved += moneyGiven - 1;
      moneyGiven += 10;
    } else {
      moneySaved += priceForToy;
    }
  }

  if (moneySaved >= washerPrice) {
    let moneyLeft = moneySaved - washerPrice;

    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washerPrice - moneySaved;

    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}

solveCurTask(["21", "1570.98", "3"]);