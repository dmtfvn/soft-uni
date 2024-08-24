function solveCurTask(input) {
  let fuelType = input[0];
  let litersFuel = Number(input[1]);
  let discountCard = input[2];

  let gasoline = litersFuel * 2.22;
  let gasolineDiscount = litersFuel * (2.22 - 0.18);

  let diesel = litersFuel * 2.33;
  let dieselDiscount = litersFuel * (2.33 - 0.12);

  let gas = litersFuel * 0.93;
  let gasDiscount = litersFuel * (0.93 - 0.08);

  if (litersFuel >= 20 && litersFuel <= 25) {
    switch (fuelType) {
      case 'Gas':
        if (discountCard === 'Yes') {
          gasDiscount *= 0.92;
          console.log(`${(gasDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          gas *= 0.92;
          console.log(`${(gas).toFixed(2)} lv.`);
        }
        break;
      case 'Gasoline':
        if (discountCard === 'Yes') {
          gasolineDiscount *= 0.92;
          console.log(`${(gasolineDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          gasoline *= 0.92;
          console.log(`${(gasoline).toFixed(2)} lv.`);
        }
        break;
      case 'Diesel':
        if (discountCard === 'Yes') {
          dieselDiscount *= 0.92;
          console.log(`${(dieselDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          diesel *= 0.92;
          console.log(`${(diesel).toFixed(2)} lv.`);
        }
        break;
    }
  } else if (litersFuel > 25) {
    switch (fuelType) {
      case 'Gas':
        if (discountCard === 'Yes') {
          gasDiscount *= 0.90;
          console.log(`${(gasDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          gas *= 0.90;
          console.log(`${(gas).toFixed(2)} lv.`);
        }
        break;
      case 'Gasoline':
        if (discountCard === 'Yes') {
          gasolineDiscount *= 0.90;
          console.log(`${(gasolineDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          gasoline *= 0.90;
          console.log(`${(gasoline).toFixed(2)} lv.`);
        }
        break;
      case 'Diesel':
        if (discountCard === 'Yes') {
          dieselDiscount *= 0.90;
          console.log(`${(dieselDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          diesel *= 0.90;
          console.log(`${(diesel).toFixed(2)} lv.`);
        }
        break;
    }
  } else if (litersFuel < 20) {
    switch (fuelType) {
      case 'Gas':
        if (discountCard === 'Yes') {
          gasDiscount;
          console.log(`${(gasDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          gas;
          console.log(`${(gas).toFixed(2)} lv.`);
        }
        break;
      case 'Gasoline':
        if (discountCard === 'Yes') {
          gasolineDiscount;
          console.log(`${(gasolineDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          gasoline;
          console.log(`${(gasoline).toFixed(2)} lv.`);
        }
        break;
      case 'Diesel':
        if (discountCard === 'Yes') {
          dieselDiscount;
          console.log(`${(dieselDiscount).toFixed(2)} lv.`);
        } else if (discountCard === 'No') {
          diesel;
          console.log(`${(diesel).toFixed(2)} lv.`);
        }
        break;
    }
  }
}

solveCurTask(["Diesel", "19", "No"]);