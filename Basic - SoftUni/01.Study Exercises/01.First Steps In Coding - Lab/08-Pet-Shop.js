function solveCurTask(input) {
  let dogFood = Number(input[0]);
  let catFood = Number(input[1]);

  let totalFoodDog = dogFood * 2.50;
  let totalFoodCat = catFood * 4;
  let totalPrice = totalFoodDog + totalFoodCat;

  console.log(`${totalPrice} lv.`);
}

solveCurTask(["5 ", "4 "]);