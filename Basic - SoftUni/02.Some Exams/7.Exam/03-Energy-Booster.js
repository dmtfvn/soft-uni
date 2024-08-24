function solveCurTask(input) {
  let fruitGel = input[0];
  let setSize = input[1];
  let setCount = Number(input[2]);

  let price = 0;

  switch (fruitGel) {
    case 'Watermelon':
      if (setSize === 'small') {
        price = 56 * 2;
      } else if (setSize === 'big') {
        price = 28.70 * 5;
      }
      break;
    case 'Mango':
      if (setSize === 'small') {
        price = 36.66 * 2;
      } else if (setSize === 'big') {
        price = 19.60 * 5;
      }
      break;
    case 'Pineapple':
      if (setSize === 'small') {
        price = 42.10 * 2;
      } else if (setSize === 'big') {
        price = 24.80 * 5;
      }
      break;
    case 'Raspberry':
      if (setSize === 'small') {
        price = 20 * 2;
      } else if (setSize === 'big') {
        price = 15.20 * 5;
      }
      break;
  }

  let finalPrice = price * setCount;

  if (finalPrice < 400) {
    finalPrice;
  } else if (finalPrice >= 400 && finalPrice <= 1000) {
    finalPrice *= 0.85;
  } else if (finalPrice > 1000) {
    finalPrice *= 0.50;
  }

  console.log(`${finalPrice.toFixed(2)} lv.`);
}

solveCurTask(["Watermelon", "big", "4"]);