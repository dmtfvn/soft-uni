function solveCurTask(input) {
  let x1 = Number(input[0]);
  let y1 = Number(input[1]);
  let x2 = Number(input[2]);
  let y2 = Number(input[3]);
  let x = Number(input[4]);
  let y = Number(input[5]);

  let onLeftBorder = (x == x1) && (y >= y1) && (y <= y2);
  let onRightBorder = (x == x2) && (y >= y1) && (y <= y2);

  let onUpBorder = (y == y1) && (x >= x1) && (x <= x2);
  let onDownBorder = (y == y2) && (x >= x1) && (x <= x2);

  if (onLeftBorder || onRightBorder || onUpBorder || onDownBorder) {
    console.log('Border');
  } else {
    console.log('Inside / Outside');
  }
}

solveCurTask(["2", "-3", "12", "3", "12", "-1"]);