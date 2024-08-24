function solveCurTask(input) {
  let secondNum = Number(input[0]);

  for (let firstNum = 1; firstNum <= 10; firstNum++) {
    let result = firstNum * secondNum;

    console.log(`${firstNum} * ${secondNum} = ${result}`);
  }
}

solveCurTask(["5"]);