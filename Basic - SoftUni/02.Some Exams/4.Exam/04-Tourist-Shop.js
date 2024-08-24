function solveCurTask(input) {
  let budget = Number(input[0]);

  let i = 1;
  let current = input[i];

  let totalItems = 0;
  let totalPrice = 0;
  let price = 0;

  while (current !== 'Stop') {
    current = input[i];
    price = Number(input[i + 1]);
    i++;

    if (i % 3 * 2 === 0) {
      price *= 0.50;
    }

    if (budget < price) {
      console.log("You don't have enough money!");
      console.log(`You need ${(price - budget).toFixed(2)} leva!`);
      break;
    }

    totalItems++;
    totalPrice += price;
    budget -= price;

    i++;
    current = input[i];
  }

  if (current === 'Stop') {
    console.log(`You bought ${totalItems} products for ${totalPrice.toFixed(2)} leva.`);
  }
}

solveCurTask(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);