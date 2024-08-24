function solveCurTask(input) {
  let magnoliasCount = Number(input[0]);
  let hyacinthsCount = Number(input[1]);
  let rosesCount = Number(input[2]);
  let cactusesCount = Number(input[3]);
  let giftPrice = Number(input[4]);

  let magnoliasCost = magnoliasCount * 3.25;
  let hyacinthsCost = hyacinthsCount * 4;
  let rosesCost = rosesCount * 3.50;
  let cactusesCost = cactusesCount * 8;

  let totalCost = magnoliasCost + hyacinthsCost + rosesCost + cactusesCost;
  let taxes = 5;

  let finalcost = totalCost - totalCost * taxes / 100;

  if (finalcost < giftPrice) {
    console.log(`She will have to borrow ${Math.ceil(giftPrice - finalcost)} leva.`);
  } else if (finalcost >= giftPrice) {
    console.log(`She is left with ${Math.floor(finalcost - giftPrice)} leva.`);
  }
}

solveCurTask(["15", "7", "5", "10", "100"]);