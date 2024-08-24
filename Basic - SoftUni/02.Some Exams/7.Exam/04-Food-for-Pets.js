function solveCurTask(input) {
  let days = Number(input[0]);
  let food = Number(input[1]);

  let dogFood = 0;
  let catFood = 0;
  let biscuits = 0;

  for (let i = 2; i <= days * 2 + 1; i += 2) {
    let byDog = Number(input[i]);
    let byCat = Number(input[i + 1]);

    dogFood += byDog;
    catFood += byCat;

    if (i % 3 === 0) {
      biscuits += (byDog + byCat) * 0.10;
    }
  }

  let totalEaten = dogFood + catFood;

  let percentTotalEaten = totalEaten / food * 100;
  let percentDogFood = dogFood / totalEaten * 100;
  let percentCatFood = catFood / totalEaten * 100;

  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(`${percentTotalEaten.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);
}

solveCurTask(["3", "500", "100", "30", "110", "25", "120", "35"]);