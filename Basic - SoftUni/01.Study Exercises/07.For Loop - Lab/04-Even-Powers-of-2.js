function solveCurTask(input) {
  let n = Number(input[0]);
  let evenNum = 2;

  for (let i = 0; i <= n; i += 2) {
    console.log(Math.pow(evenNum, i));
  }
}

solveCurTask(["7"]);