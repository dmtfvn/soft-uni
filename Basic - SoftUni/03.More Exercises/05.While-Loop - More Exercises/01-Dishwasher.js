function solveCurTask(input) {
  let detergentCount = Number(input[0]);
  let detergentBottle = 750;
  let totalDetergentVolume = detergentCount * detergentBottle;

  let singlePotDetergent = 15;
  let singleDishDetergent = 5;

  let cleanPots = 0;
  let cleanDishes = 0;

  let i = 1;
  let foodContainer = input[i];

  while (foodContainer !== 'End') {
    let count = Number(foodContainer);

    if (i % 3 === 0) {
      cleanPots += count;
      totalDetergentVolume -= count * singlePotDetergent;
    } else {
      cleanDishes += count;
      totalDetergentVolume -= count * singleDishDetergent;
    }

    if (foodContainer === 'End' || totalDetergentVolume < 0) {
      break;
    }

    i++;
    foodContainer = input[i];
  }

  if (totalDetergentVolume < 0) {
    console.log(`Not enough detergent, ${Math.abs(totalDetergentVolume)} ml. more necessary!`);
  } else {
    console.log('Detergent was enough!');
    console.log(`${cleanDishes} dishes and ${cleanPots} pots were washed.`);
    console.log(`Leftover detergent ${totalDetergentVolume} ml.`);
  }
}

solveCurTask(["1", "10", "15", "10", "12", "13", "30"]);