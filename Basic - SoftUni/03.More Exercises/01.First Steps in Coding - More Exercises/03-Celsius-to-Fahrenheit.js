function solveCurTask(input) {
  let degreesC = Number(input[0]);

  let degreesF = degreesC * 9 / 5 + 32;

  console.log(degreesF.toFixed(2));
}

solveCurTask(["32.3"]);