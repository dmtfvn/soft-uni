function solveCurTask(input) {
  let joineryCount = Number(input[0]);
  let joineryType = input[1];
  let deliveryType = input[2];

  let deliveryPrice = 60;
  let totalCost = 0;

  if (joineryCount <= 10) {
    console.log('Invalid order');
  } else if (joineryCount > 10) {
    switch (joineryType) {
      case '90X130':
        if (joineryCount > 60) {
          totalCost = joineryCount * 110 * 0.92;
        } else if (joineryCount > 30) {
          totalCost = joineryCount * 110 * 0.95;
        } else {
          totalCost = joineryCount * 110;
        }
        break;
      case '100X150':
        if (joineryCount > 80) {
          totalCost = joineryCount * 140 * 0.90;
        } else if (joineryCount > 40) {
          totalCost = joineryCount * 140 * 0.94;
        } else {
          totalCost = joineryCount * 140;
        }
        break;
      case '130X180':
        if (joineryCount > 50) {
          totalCost = joineryCount * 190 * 0.88;
        } else if (joineryCount > 20) {
          totalCost = joineryCount * 190 * 0.93;
        } else {
          totalCost = joineryCount * 190;
        }
        break;
      case '200X300':
        if (joineryCount > 50) {
          totalCost = joineryCount * 250 * 0.86;
        } else if (joineryCount > 25) {
          totalCost = joineryCount * 250 * 0.91;
        } else {
          totalCost = joineryCount * 250;
        }
        break;
    }

    if (deliveryType === 'With delivery') {
      totalCost += deliveryPrice;
    } else if (deliveryType === 'Without delivery') {
      totalCost;
    }

    if (joineryCount > 99) {
      totalCost *= 0.96;
    }

    console.log(`${totalCost.toFixed(2)} BGN`);
  }
}

solveCurTask(["105", "100X150", "With delivery"]);