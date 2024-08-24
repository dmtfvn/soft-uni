function solveCurTask(input) {
  let turnCount = Number(input[0]);

  let endResult = 0;

  let zeroTo9 = 0;
  let tenTo19 = 0;
  let twentyTo29 = 0;
  let thirtyTo39 = 0;
  let fourtyTo50 = 0;
  let invalidNum = 0;

  for (let i = 1; i <= turnCount; i++) {
    let num = Number(input[i]);

    if (num >= 0 && num <= 9) {
      endResult += num * 0.20;
      zeroTo9++;
    } else if (num >= 10 && num <= 19) {
      endResult += num * 0.30;
      tenTo19++;
    } else if (num >= 20 && num <= 29) {
      endResult += num * 0.40;
      twentyTo29++;
    } else if (num >= 30 && num <= 39) {
      endResult += 50;
      thirtyTo39++;
    } else if (num >= 40 && num <= 50) {
      endResult += 100;
      fourtyTo50++;
    } else if (num > 50 || num < 0) {
      endResult /= 2;
      invalidNum++;
    }
  }

  let percentZeroTo9 = zeroTo9 / turnCount * 100;
  let percentTenTo19 = tenTo19 / turnCount * 100;
  let percentTwentyTo29 = twentyTo29 / turnCount * 100;
  let percentThirtyTo39 = thirtyTo39 / turnCount * 100;
  let percentFourtyTo50 = fourtyTo50 / turnCount * 100;
  let percentInvalidNum = invalidNum / turnCount * 100;

  console.log(endResult.toFixed(2));
  console.log(`From 0 to 9: ${percentZeroTo9.toFixed(2)}%`);
  console.log(`From 10 to 19: ${percentTenTo19.toFixed(2)}%`);
  console.log(`From 20 to 29: ${percentTwentyTo29.toFixed(2)}%`);
  console.log(`From 30 to 39: ${percentThirtyTo39.toFixed(2)}%`);
  console.log(`From 40 to 50: ${percentFourtyTo50.toFixed(2)}%`);
  console.log(`Invalid numbers: ${percentInvalidNum.toFixed(2)}%`);
}

solveCurTask(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);