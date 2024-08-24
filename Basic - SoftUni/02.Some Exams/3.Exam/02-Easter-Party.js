function solveCurTask(input) {
  let guestsCount = Number(input[0]);
  let singleGuestCost = Number(input[1]);
  let budget = Number(input[2]);

  let cakePrice = budget * 0.1;

  if (guestsCount >= 10 && guestsCount <= 15) {
    singleGuestCost *= 0.85;
  } else if (guestsCount > 15 && guestsCount <= 20) {
    singleGuestCost *= 0.80;
  } else if (guestsCount > 20) {
    singleGuestCost *= 0.75;
  }

  let totalPartyCost = guestsCount * singleGuestCost + cakePrice;

  if (totalPartyCost <= budget) {
    console.log(`It is party time! ${(budget - totalPartyCost).toFixed(2)} leva left.`);
  } else if (totalPartyCost > budget) {
    console.log(`No party! ${(totalPartyCost - budget).toFixed(2)} leva needed.`);
  }
}

solveCurTask(["24", "35", "550"]);