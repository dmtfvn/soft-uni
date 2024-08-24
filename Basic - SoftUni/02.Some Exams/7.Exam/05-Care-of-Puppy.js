function solveCurTask(input) {
  let i = 0;
  let row = Number(input[i]);
  i++;

  let foodInGrams = row * 1000;

  let totalEaten = 0;

  while (row !== 'Adopted') {
    let perDay = Number(input[i]);

    totalEaten += perDay;

    i++;
    row = input[i];
  }

  if (totalEaten <= foodInGrams) {
    console.log(`Food is enough! Leftovers: ${foodInGrams - totalEaten} grams.`);
  } else if (totalEaten > foodInGrams) {
    console.log(`Food is not enough. You need ${totalEaten - foodInGrams} grams more.`);
  }
}

solveCurTask(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);