function solveCurTask(input) {
  let processorPriceUS = Number(input[0]);
  let videoCardPriceUS = Number(input[1]);
  let ramPriceUS = Number(input[2]);
  let ramCount = Number(input[3]);
  let percentDiscount = Number(input[4]);

  let processorPriceBG = processorPriceUS * 1.57;
  let videoCardPriceBG = videoCardPriceUS * 1.57;
  let ramPriceBG = ramPriceUS * 1.57;

  let totalRamPriceBG = ramPriceBG * ramCount;

  let processorDiscount = processorPriceBG - processorPriceBG * percentDiscount;
  let videoCardDiscount = videoCardPriceBG - videoCardPriceBG * percentDiscount;

  let totalCost = processorDiscount + videoCardDiscount + totalRamPriceBG;

  console.log(`Money needed - ${totalCost.toFixed(2)} leva.`);
}

solveCurTask(["500", "200", "80", "2", "0.05"]);