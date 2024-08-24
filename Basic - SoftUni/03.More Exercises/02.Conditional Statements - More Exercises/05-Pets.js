function solveCurTask(input) {
  let daysAway = Number(input[0]);
  let petFoodKilos = Number(input[1]);
  let dogFoodKilos = Number(input[2]);
  let catFoodKilos = Number(input[3]);
  let turtleFoodGrams = Number(input[4]);

  let turtleFoodKilos = turtleFoodGrams / 1000;

  let neededDogFood = daysAway * dogFoodKilos;
  let neededCatFood = daysAway * catFoodKilos;
  let neededTurtleFood = daysAway * turtleFoodKilos;

  let totalPetFood = neededDogFood + neededCatFood + neededTurtleFood;

  if (totalPetFood <= petFoodKilos) {
    console.log(`${Math.floor(petFoodKilos - totalPetFood)} kilos of food left.`);
  } else if (petFoodKilos <= totalPetFood) {
    console.log(`${Math.ceil(totalPetFood - petFoodKilos)} more kilos of food are needed.`);
  }
}

solveCurTask(["5", "10", "2.1", "0.8", "321"]);