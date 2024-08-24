function solveCurTask(input) {
  let a = Number(input[0]);
  let ha = Number(input[1]);

  let area = a * ha / 2;

  console.log(area.toFixed(2));
}

solveCurTask(["7.75", "8.45"]);