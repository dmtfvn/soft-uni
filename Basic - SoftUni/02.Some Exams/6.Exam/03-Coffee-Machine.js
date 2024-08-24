function solveCurTask(input) {
  let beverageType = input[0];
  let sugar = input[1];
  let beverageCount = Number(input[2]);

  let beveragePrice = 0;

  switch (beverageType) {
    case 'Espresso':
      if (sugar === 'Without') {
        beveragePrice = beverageCount * 0.90 * 0.65;
      } else if (sugar === 'Normal') {
        beveragePrice = beverageCount * 1;
      } else if (sugar === 'Extra') {
        beveragePrice = beverageCount * 1.20;
      }
      break;
    case 'Cappuccino':
      if (sugar === 'Without') {
        beveragePrice = beverageCount * 1 * 0.65;
      } else if (sugar === 'Normal') {
        beveragePrice = beverageCount * 1.20;
      } else if (sugar === 'Extra') {
        beveragePrice = beverageCount * 1.60;
      }
      break;
    case 'Tea':
      if (sugar === 'Without') {
        beveragePrice = beverageCount * 0.50 * 0.65;
      } else if (sugar === 'Normal') {
        beveragePrice = beverageCount * 0.60;
      } else if (sugar === 'Extra') {
        beveragePrice = beverageCount * 0.70;
      }
      break;
  }

  if (beverageType === 'Espresso' && beverageCount >= 5) {
    beveragePrice *= 0.75;
  }

  if (beveragePrice > 15) {
    beveragePrice *= 0.80;
  }

  console.log(`You bought ${beverageCount} cups of ${beverageType} for ${beveragePrice.toFixed(2)} lv.`);
}

solveCurTask(["Espresso", "Without", "10"]);