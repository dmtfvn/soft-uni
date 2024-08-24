function solveCurTask(input) {
  let totalNum = Number(input[0]);

  let num2 = 0;
  let num3 = 0;
  let num4 = 0;

  for (let i = 1; i <= totalNum; i++) {
    let currNum = Number(input[i]);

    if (currNum % 2 === 0) {
      num2++;
    }

    if (currNum % 3 === 0) {
      num3++;
    }

    if (currNum % 4 === 0) {
      num4++;
    }
  }

  let pNum2 = num2 / totalNum * 100;
  let pNum3 = num3 / totalNum * 100;
  let pNum4 = num4 / totalNum * 100;

  console.log(`${pNum2.toFixed(2)}%`);
  console.log(`${pNum3.toFixed(2)}%`);
  console.log(`${pNum4.toFixed(2)}%`);
}

solveCurTask(["3", "3", "6", "9"]);