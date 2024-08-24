function solveCurTask(input) {
  let numLength = Number(input[0]);

  let oddSum = 0;
  let evenSum = 0;

  let oddMax = -1000000000.0;
  let oddMin = 1000000000.0;

  let evenMax = -1000000000.0;
  let evenMin = 1000000000.0;

  for (let i = 1; i <= numLength; i++) {
    let num = Number(input[i]);

    if (i % 2 === 0) {
      evenSum += num;

      if (num < evenMin) {
        evenMin = num;
      }
      if (num > evenMax) {
        evenMax = num;
      }
    } else if (i % 2 !== 0) {
      oddSum += num;

      if (num < oddMin) {
        oddMin = num;
      }
      if (num > oddMax) {
        oddMax = num;
      }
    }
  }

  if (oddSum == 0) {
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log('OddMin=No,');
    console.log('OddMax=No,');
  } else {
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
  }

  if (evenSum == 0) {
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log('EvenMin=No,');
    console.log('EvenMax=No');
  } else {
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
  }
}

solveCurTask(["6", "2", "3", "5", "4", "2", "1"]);