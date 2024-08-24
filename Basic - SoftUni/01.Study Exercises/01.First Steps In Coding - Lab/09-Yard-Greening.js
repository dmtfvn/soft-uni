function solveCurTask(input) {
  let yardArea = Number(input[0]);
  let priceYardArea = yardArea * 7.61;

  let discountPrice = priceYardArea * 0.18;
  let finalPrice = priceYardArea - discountPrice;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discountPrice} lv.`);
}

solveCurTask(["550"]);