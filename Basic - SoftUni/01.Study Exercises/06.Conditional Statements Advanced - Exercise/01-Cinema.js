function solveCurTask(input) {
  let type = input[0];
  let rowCount = Number(input[1]);
  let columnCount = Number(input[2]);
  let income = 0;

  if (type == 'Premiere') {
    income = rowCount * columnCount * 12.00;
  } else if (type == 'Normal') {
    income = rowCount * columnCount * 7.50;
  } else if (type == 'Discount') {
    income = rowCount * columnCount * 5.00;
  }

  console.log(`${income.toFixed(2)} leva`);
}

solveCurTask(["Normal", "21", "13"]);