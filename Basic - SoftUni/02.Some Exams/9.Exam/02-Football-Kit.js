function solveCurTask(input) {
  let shirtPrice = Number(input[0]);
  let targetPrice = Number(input[1]);

  let shortsPrice = shirtPrice * 0.75;
  let socksPcire = shortsPrice * 0.20;

  let soccerShoesPrice = (shirtPrice + shortsPrice) * 2;

  let totalCost = shirtPrice + shortsPrice + socksPcire + soccerShoesPrice;
  let finalCostAfterDiscount = totalCost * 0.85;

  if (finalCostAfterDiscount >= targetPrice) {
    console.log('Yes, he will earn the world-cup replica ball!');
    console.log(`His sum is ${finalCostAfterDiscount.toFixed(2)} lv.`);
  } else {
    console.log('No, he will not earn the world-cup replica ball.');
    console.log(`He needs ${(targetPrice - finalCostAfterDiscount).toFixed(2)} lv. more.`);
  }
}

solveCurTask(["55", "310"]);