function solveCurTask(input) {
  let targetSum = Number(input[0]);
  let totalSum = 0;

  let i = 1;
  let row = input[i];

  while (row !== 'Party!') {
    let cocktailName = row;
    let singlePrice = cocktailName.length;

    i++;

    let cocktailQuantity = Number(input[i]);
    let currCocktailFinalPrice = singlePrice * cocktailQuantity;

    if (currCocktailFinalPrice % 2 !== 0) {
      currCocktailFinalPrice *= 0.75;
    }

    totalSum += currCocktailFinalPrice;

    if (totalSum >= targetSum) {
      console.log('Target acquired.');
      console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
      break;
    }

    i++;
    row = input[i];
  }

  if (totalSum < targetSum) {
    console.log(`We need ${(targetSum - totalSum).toFixed(2)} leva more.`);
    console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
  }
}

solveCurTask(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);