function solveCurTask(input) {
  let pensCount = Number(input[0]);
  let markersCount = Number(input[1]);
  let cleaningSolution = Number(input[2]);
  let discount = Number(input[3]);

  let pensPrice = pensCount * 5.80;
  let markersPrice = markersCount * 7.20;
  let cleaningSolutionPrice = cleaningSolution * 1.20;

  let totalPrice = pensPrice + markersPrice + cleaningSolutionPrice;
  let discountPrice = totalPrice * discount / 100;
  let priceAfterDiscount = totalPrice - discountPrice;

  console.log(priceAfterDiscount);
}

solveCurTask(["2", "3", "4", "25"]);