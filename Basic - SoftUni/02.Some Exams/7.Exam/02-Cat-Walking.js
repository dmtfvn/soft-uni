function solveCurTask(input) {
  let walkInMinutes = Number(input[0]);
  let walksCount = Number(input[1]);
  let caloriesPerDay = Number(input[2]);

  let totalWalk = walkInMinutes * walksCount;
  let totalBurnCalories = totalWalk * 5;

  let halfCaloriesPerDay = caloriesPerDay * 0.5;

  if (totalBurnCalories >= halfCaloriesPerDay) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnCalories}.`);
  } else if (totalBurnCalories < halfCaloriesPerDay) {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnCalories}.`);
  }
}

solveCurTask(["15", "2", "500"]);