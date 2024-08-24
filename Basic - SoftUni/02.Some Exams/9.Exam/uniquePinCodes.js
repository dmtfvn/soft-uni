function solveCurTask(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 2; i <= num1; i += 2) {
    for (let j = 2; j <= num2; j++) {
      for (let k = 2; k <= num3; k += 2) {
        if (j === 2 || j === 3 || j === 5 || j === 7) {

          console.log(`${i} ${j} ${k}`);
        }
      }
    }
  }
}

solveCurTask(["3", "5", "5"]);