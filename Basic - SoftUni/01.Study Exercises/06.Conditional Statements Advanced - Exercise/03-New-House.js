function solveCurTask(input) {
  let flowers = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);
  let totalSum = 0;

  switch (flowers) {
    case 'Roses':
      totalSum = quantity * 5;

      if (quantity > 80) {
        totalSum *= 0.90;
      }
      break;
    case 'Dahlias':
      totalSum = quantity * 3.80;

      if (quantity > 90) {
        totalSum *= 0.85;
      }
      break;
    case 'Tulips':
      totalSum = quantity * 2.80;

      if (quantity > 80) {
        totalSum *= 0.85;
      }
      break;
    case 'Narcissus':
      totalSum = quantity * 3;

      if (quantity < 120) {
        totalSum *= 1.15;
      }
      break;
    case 'Gladiolus':
      totalSum = quantity * 2.50;

      if (quantity < 80) {
        totalSum *= 1.20;
      }
      break;
  }

  if (budget >= totalSum) {
    console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget - totalSum).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
  }
}

solveCurTask(["Roses", "55", "250"]);